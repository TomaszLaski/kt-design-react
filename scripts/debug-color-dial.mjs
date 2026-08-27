// One-off diagnostic #2: color dial furniture candidates to identify
// marker/hand lume geometry. Hands get per-primitive split colors.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { simplifyPrimitive, draco, prune, dedup, weld } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';

const [input, output] = process.argv.slice(2);

if (MeshoptSimplifier.ready) await MeshoptSimplifier.ready;
const io = new NodeIO()
	.registerExtensions(ALL_EXTENSIONS)
	.registerDependencies({
		'draco3d.decoder': await draco3d.createDecoderModule(),
		'draco3d.encoder': await draco3d.createEncoderModule(),
	});

const doc = await io.read(input);
await doc.transform(dedup(), weld());

const mk = (name, color) =>
	doc.createMaterial(name).setBaseColorFactor([...color, 1]).setMetallicFactor(0).setRoughnessFactor(0.9);
const RED = mk('dbg-red', [1, 0, 0]);
const GREEN = mk('dbg-green', [0, 1, 0]);
const BLUE = mk('dbg-blue', [0, 0.4, 1]);
const YELLOW = mk('dbg-yellow', [1, 1, 0]);
const MAGENTA = mk('dbg-magenta', [1, 0, 1]);

const DOTS = new Set(['Cylinder027', 'Cylinder028', 'Cylinder029', 'Cylinder030', 'Cylinder031', 'Cylinder032', 'Cylinder033', 'Cylinder034']);
const BARS = new Set(['Box003', 'Box004', 'Box020']);
const TRI = new Set(['Box005']);
const HANDS = new Set(['Cylinder012', 'Cylinder017', 'Cylinder018']);

for (const mesh of doc.getRoot().listMeshes()) {
	const name = mesh.getName();
	for (const prim of mesh.listPrimitives()) {
		const matName = prim.getMaterial()?.getName();
		if (DOTS.has(name)) prim.setMaterial(RED);
		else if (BARS.has(name)) prim.setMaterial(GREEN);
		else if (TRI.has(name)) prim.setMaterial(BLUE);
		else if (HANDS.has(name)) prim.setMaterial(matName === 'rolex2' ? MAGENTA : YELLOW);
	}
}

for (const mesh of doc.getRoot().listMeshes()) {
	for (const prim of mesh.listPrimitives()) {
		const idx = prim.getIndices();
		if (!idx || idx.getCount() < 6000) continue;
		simplifyPrimitive(prim, {
			simplifier: MeshoptSimplifier,
			ratio: 0.05,
			error: 0.001,
			lockBorder: true,
		});
	}
}

await doc.transform(prune(), draco({ quantizePosition: 14, quantizeNormal: 10 }));
await io.write(output, doc);
console.log('debug dial glb written:', output);
