// Quality-first optimization: simplification is bounded by geometric error
// (stops before deviation becomes visible), not by a fixed triangle ratio.
// Border edges are locked so separate parts (bracelet links) never crack apart.
//
// With a normalWeight > 0 the simplifier also penalizes normal deviation
// (simplifyWithAttributes) — critical for polished metal, where env-map
// reflections magnify the slightest curvature change that a position-only
// metric considers invisible.
//
// Usage: node scripts/optimize-rolex-hq.mjs <input.glb> <output.glb> <error> [normalWeight]
//   error        — max deviation relative to mesh extent, e.g. 0.0001
//   normalWeight — weight of normal preservation, e.g. 1.0 (default 0 = positions only)

import { existsSync, readFileSync } from 'node:fs';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS, KHRMaterialsAnisotropy } from '@gltf-transform/extensions';
import {
	weld,
	simplifyPrimitive,
	compactPrimitive,
	draco,
	prune,
	dedup,
} from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';

const [input, output, errorArg, weightArg] = process.argv.slice(2);
const errorBound = Number(errorArg);
const normalWeight = Number(weightArg ?? 0);
if (!input || !output || !Number.isFinite(errorBound)) {
	console.error('Usage: node optimize-rolex-hq.mjs <input.glb> <output.glb> <error> [normalWeight]');
	process.exit(1);
}

function triCount(prim) {
	const indices = prim.getIndices();
	if (indices) return indices.getCount() / 3;
	const pos = prim.getAttribute('POSITION');
	return pos ? pos.getCount() / 3 : 0;
}

if (MeshoptSimplifier.ready) await MeshoptSimplifier.ready;

const io = new NodeIO()
	.registerExtensions(ALL_EXTENSIONS)
	.registerDependencies({
		'draco3d.decoder': await draco3d.createDecoderModule(),
		'draco3d.encoder': await draco3d.createEncoderModule(),
	});

const doc = await io.read(input);
await doc.transform(dedup(), weld());

// Authored materials from Max (rolex1..rolex8) pass through untouched.
// Two fixes on top, identified via world-space geometry:
// - Object068 is the front disc directly behind the crystal = the dial
//   plate (the real dial face with markers was not exported), shared
//   material rolex1 would leave it white — override just this mesh.
// - "fallback Material" placeholders (clasp parts Box017/018, bracelet
//   pins Cylinder027-034, crystal ring Cylinder035) become steel.
function styleMaterial(material, { base, metal, rough }) {
	material.setBaseColorFactor([...base, 1]);
	material.setMetallicFactor(metal);
	material.setRoughnessFactor(rough);
}

const buffer = doc.getRoot().listBuffers()[0];

// Dial face: the exporter delivers the plate with no UVs, so project the
// printed dial image onto it planarly (the plate is flat in its local XY).
const DIAL_TEXTURE_PATH = 'src/assets/models/dial-texture-2x.png';
const DIAL_UV_FIT = 0.64; // printed disc diameter as a fraction of image width
const DIAL_UV_ROT = 0; // radians; adjust to clock the "12" upright
const DIAL_UV_MIRROR = false; // true if the text reads mirrored

const dialMat = doc.createMaterial('dial-black');
styleMaterial(dialMat, { base: [0.013, 0.013, 0.015], metal: 0, rough: 0.35 });
if (existsSync(DIAL_TEXTURE_PATH)) {
	const dialTex = doc
		.createTexture('dial')
		.setImage(readFileSync(DIAL_TEXTURE_PATH))
		.setMimeType('image/png');
	dialMat.setBaseColorTexture(dialTex);
	dialMat.setBaseColorFactor([1, 1, 1, 1]);
}

function projectDialUVs(prim) {
	const pos = prim.getAttribute('POSITION');
	const count = pos.getCount();
	const el = [0, 0, 0];
	let minX = Infinity;
	let maxX = -Infinity;
	let minY = Infinity;
	let maxY = -Infinity;
	for (let i = 0; i < count; i++) {
		pos.getElement(i, el);
		minX = Math.min(minX, el[0]);
		maxX = Math.max(maxX, el[0]);
		minY = Math.min(minY, el[1]);
		maxY = Math.max(maxY, el[1]);
	}
	const cx = (minX + maxX) / 2;
	const cy = (minY + maxY) / 2;
	const dia = Math.max(maxX - minX, maxY - minY);
	const cos = Math.cos(DIAL_UV_ROT);
	const sin = Math.sin(DIAL_UV_ROT);
	const uv = new Float32Array(count * 2);
	for (let i = 0; i < count; i++) {
		pos.getElement(i, el);
		let x = ((el[0] - cx) / dia) * DIAL_UV_FIT;
		const y = ((el[1] - cy) / dia) * DIAL_UV_FIT;
		if (DIAL_UV_MIRROR) x = -x;
		uv[i * 2] = 0.5 + x * cos - y * sin;
		uv[i * 2 + 1] = 0.5 - (x * sin + y * cos);
	}
	prim.setAttribute(
		'TEXCOORD_0',
		doc.createAccessor().setType('VEC2').setArray(uv).setBuffer(buffer),
	);
}

// Verified visually (color-coded debug render): the visible dial face is
// Cylinder010; Object068 is the thin surround ring directly behind it.
const DIAL_MESHES = new Set(['Cylinder010', 'tarcza rolex']);
const DIAL_RING_MESHES = new Set(['Object068']);
const ringMat = doc.createMaterial('dial-ring');
styleMaterial(ringMat, { base: [0.013, 0.013, 0.015], metal: 0, rough: 0.35 });
for (const mesh of doc.getRoot().listMeshes()) {
	if (DIAL_RING_MESHES.has(mesh.getName())) {
		for (const prim of mesh.listPrimitives()) prim.setMaterial(ringMat);
		continue;
	}
	if (!DIAL_MESHES.has(mesh.getName())) continue;
	for (const prim of mesh.listPrimitives()) {
		// an authored dial texture (added later in Max) always wins
		if (prim.getMaterial()?.getBaseColorTexture()) continue;
		prim.setMaterial(dialMat);
		if (dialMat.getBaseColorTexture()) projectDialUVs(prim);
	}
}

// The Max glb exporter drops color/brushed-steel MAPS it cannot bake into
// glTF — materials whose color came from a map export as default white,
// and V-Ray reflection-color "metals" export as metal 0. Flat colors
// survive (rolex4/rolex8). Restore real steel on the map-based ones.
// Steel values calibrated against the custom strip-light studio env
// (public/studio-env.png) — with it, steel wants a mid-bright base;
// contrast comes from the environment's light bands, not the base color.
// Names follow the rolex4.glb export: rolex1 = all steel, rolex2 = polished
// chamfers + bezel numerals (its roughness got lost in export — restore).
const MATERIAL_TWEAKS = {
	rolex1: { base: [0.63, 0.64, 0.66], metal: 1, rough: 0.45 }, // stal — bransoleta/koperta/wskazówki
	rolex2: { base: [0.72, 0.73, 0.75], metal: 1, rough: 0.1 }, // polerowane fazowania, numerki bezela
	'fallback Material': { base: [0.68, 0.69, 0.71], metal: 1, rough: 0.3 },
};
for (const material of doc.getRoot().listMaterials()) {
	const tweak = MATERIAL_TWEAKS[material.getName()];
	if (tweak) styleMaterial(material, tweak);
	// glass: OPAQUE + transmission is the standard glTF glass setup;
	// BLEND double-applies transparency and washes out the dial
	if (material.getName() === 'rolex7') {
		material.setAlphaMode('OPAQUE');
		material.setBaseColorFactor([1, 1, 1, 1]);
	}
}

// rolex2 is shared by two unrelated real-world parts: the bezel-numerals
// ring (Cylinder037, should stay bright polished steel) AND the fill/inlay
// of every dial marker and hand (dots, bars, triangle, hour/minute hands —
// each of those meshes has a steel frame primitive on rolex1 plus a fill
// primitive on rolex2). Painting all of rolex2 as mirror steel made the
// marker/hand centers read black under low-key studio light — the original
// design has them as pale lume, not steel. Verified mesh identity via a
// color-coded debug render (scripts/debug-color-dial.mjs).
const LUME_FILL_MESHES = new Set([
	'Cylinder001',
	'Cylinder002',
	'Cylinder003',
	'Cylinder004',
	'Cylinder005',
	'Cylinder006',
	'Cylinder007',
	'Cylinder008',
	'Cylinder017',
	'Cylinder038',
	'Box003',
	'Box004',
	'Box020',
	'Box005',
	'Cylinder012',
	'Cylinder018',
]);
const lumeMat = doc.createMaterial('lume');
styleMaterial(lumeMat, { base: [0.92, 0.93, 0.88], metal: 0, rough: 0.45 });
for (const mesh of doc.getRoot().listMeshes()) {
	if (!LUME_FILL_MESHES.has(mesh.getName())) continue;
	for (const prim of mesh.listPrimitives()) {
		if (prim.getMaterial()?.getName() === 'rolex2') prim.setMaterial(lumeMat);
	}
}

function simplifyWithNormals(prim) {
	const position = prim.getAttribute('POSITION');
	const normal = prim.getAttribute('NORMAL');
	const srcIndices = prim.getIndices();
	if (!position || !normal || !srcIndices) return false;

	let positions = position.getArray();
	let normals = normal.getArray();
	let indices = srcIndices.getArray();
	if (!(positions instanceof Float32Array) || !(normals instanceof Float32Array)) return false;
	if (!(indices instanceof Uint32Array)) indices = new Uint32Array(indices);

	const targetCount = Math.floor((0.05 * indices.length) / 3) * 3;
	const [dstIndices] = MeshoptSimplifier.simplifyWithAttributes(
		indices,
		positions,
		3,
		normals,
		3,
		[normalWeight, normalWeight, normalWeight],
		null,
		targetCount,
		errorBound,
		['LockBorder'],
	);
	prim.setIndices(doc.createAccessor().setType('SCALAR').setArray(dstIndices).setBuffer(buffer));
	compactPrimitive(prim);
	return true;
}

let before = 0;
let after = 0;
for (const mesh of doc.getRoot().listMeshes()) {
	for (const prim of mesh.listPrimitives()) {
		const tris = triCount(prim);
		before += tris;
		if (tris < 2000) {
			after += tris;
			continue;
		}
		const done = normalWeight > 0 && simplifyWithNormals(prim);
		if (!done) {
			simplifyPrimitive(prim, {
				simplifier: MeshoptSimplifier,
				ratio: 0.05,
				error: errorBound,
				lockBorder: true,
			});
		}
		after += triCount(prim);
	}
}

// Brushed steel: the CAD geometry ships without UVs, so no exported bitmap
// can ever attach (the Max exporter silently drops maps). Generate planar
// UVs per steel primitive after simplification and tile procedural brushing
// maps; KHR_materials_anisotropy stretches highlights across the grain the
// way V-Ray's brushed metal does.
const BRUSH_NORMAL_PATH = 'src/assets/models/brushed-normal.png';
const BRUSH_MR_PATH = 'src/assets/models/brushed-mr.png';
const BRUSH_TILE = 0.15; // world units per texture repeat (world-space scale, not local CAD units)
const steelMat = doc
	.getRoot()
	.listMaterials()
	.find((m) => m.getName() === 'rolex1');
if (steelMat && existsSync(BRUSH_NORMAL_PATH) && existsSync(BRUSH_MR_PATH)) {
	steelMat.setNormalTexture(
		doc.createTexture('brushed-normal').setImage(readFileSync(BRUSH_NORMAL_PATH)).setMimeType('image/png'),
	);
	steelMat.setNormalScale(0.6);
	steelMat.setMetallicRoughnessTexture(
		doc.createTexture('brushed-mr').setImage(readFileSync(BRUSH_MR_PATH)).setMimeType('image/png'),
	);
	steelMat.setRoughnessFactor(1);
	steelMat.setMetallicFactor(1);
	if (process.env.DEBUG_STRIPES) {
		steelMat.setBaseColorTexture(
			doc.createTexture('debug-stripes').setImage(readFileSync('src/assets/models/debug-stripes.png')).setMimeType('image/png'),
		);
		steelMat.setBaseColorFactor([1, 1, 1, 1]);
		steelMat.setMetallicFactor(0);
		steelMat.setRoughnessFactor(0.9);
		steelMat.setNormalScale(0);
	}
	// Anisotropy with derivative tangents produced dark blotches on side
	// faces (squashed planar UVs) — disabled; the brushed normal map plus
	// roughness variation carries the effect.
	const BRUSH_ANISOTROPY = 0;
	if (BRUSH_ANISOTROPY > 0) {
		const anisoExt = doc.createExtension(KHRMaterialsAnisotropy);
		steelMat.setExtension(
			'KHR_materials_anisotropy',
			anisoExt.createAnisotropy().setAnisotropyStrength(BRUSH_ANISOTROPY).setAnisotropyRotation(0),
		);
	}

	// Build mesh -> world matrix lookup (one node per mesh in this file).
	const worldMatrixByMesh = new Map();
	for (const scene of doc.getRoot().listScenes()) {
		scene.traverse((node) => {
			const mesh = node.getMesh();
			if (mesh) worldMatrixByMesh.set(mesh, node.getWorldMatrix());
		});
	}
	function mulPoint(m, v) {
		return [
			m[0] * v[0] + m[4] * v[1] + m[8] * v[2] + m[12],
			m[1] * v[0] + m[5] * v[1] + m[9] * v[2] + m[13],
			m[2] * v[0] + m[6] * v[1] + m[10] * v[2] + m[14],
		];
	}

	// Grain runs along each part's own longest WORLD-space axis (not local
	// mesh-space, which is an arbitrary per-part Max coordinate system —
	// using it caused every bracelet link to pick a different, inconsistent
	// grain angle). World space reflects how each part actually sits in the
	// final assembly, so links/lugs/clasp all read as one coherent brushing
	// direction, matching the real Rolex "lengthwise along the part" look
	// (verified via a color-coded debug render identifying each mesh).
	for (const mesh of doc.getRoot().listMeshes()) {
		const worldMatrix = worldMatrixByMesh.get(mesh);
		for (const prim of mesh.listPrimitives()) {
			if (prim.getMaterial() !== steelMat) continue;
			if (prim.getAttribute('TEXCOORD_0')) continue;
			const pos = prim.getAttribute('POSITION');
			const count = pos.getCount();
			const el = [0, 0, 0];
			const uv = new Float32Array(count * 2);

			const world = new Array(count);
			const min = [Infinity, Infinity, Infinity];
			const max = [-Infinity, -Infinity, -Infinity];
			for (let i = 0; i < count; i++) {
				pos.getElement(i, el);
				const w = mulPoint(worldMatrix, el);
				world[i] = w;
				for (let a = 0; a < 3; a++) {
					if (w[a] < min[a]) min[a] = w[a];
					if (w[a] > max[a]) max[a] = w[a];
				}
			}
			const extents = [0, 1, 2].map((a) => max[a] - min[a]);
			const order = [0, 1, 2].sort((a, b) => extents[b] - extents[a]);
			const uAxis = order[0];
			const vAxis = order[1];
			for (let i = 0; i < count; i++) {
				uv[i * 2] = (world[i][uAxis] - min[uAxis]) / BRUSH_TILE;
				uv[i * 2 + 1] = (world[i][vAxis] - min[vAxis]) / BRUSH_TILE;
			}

			prim.setAttribute(
				'TEXCOORD_0',
				doc.createAccessor().setType('VEC2').setArray(uv).setBuffer(buffer),
			);
		}
	}
	// Explicit MikkTSpace tangents would require unwelding every steel prim
	// (heavier file); three.js derives tangents from screen-space derivatives,
	// which renders the normal map and anisotropy correctly here.
}

await doc.transform(prune(), draco({ quantizePosition: 14, quantizeNormal: 12 }));
await io.write(output, doc);
console.log(
	`${output}  error=${errorBound} normalWeight=${normalWeight}  tris ${Math.round(before).toLocaleString()} -> ${Math.round(after).toLocaleString()}`,
);
