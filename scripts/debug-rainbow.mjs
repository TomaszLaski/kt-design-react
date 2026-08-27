// One-off diagnostic #4: assign every candidate "case cluster" mesh a
// unique color from a rainbow palette, printing a name->color legend, so
// each can be visually identified in a screenshot without ambiguity.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { simplifyPrimitive, draco, prune, dedup, weld } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';

const [input, output] = process.argv.slice(2);

const NAMES = [
	'Cylinder019', 'Object', 'Box012', 'Cylinder021', 'Box010', 'Box011', 'Box013',
	'Object064', 'Object068', 'Box002', 'Box017', 'Box018', 'Object065', 'Object066',
	'Cylinder025', 'Cylinder024', 'Cylinder020', 'Cylinder022', 'Cylinder026', 'Object067',
];

function hsl(h) {
	const c = (1 - Math.abs((h / 60) % 2 - 1));
	let r = 0, g = 0, b = 0;
	if (h < 60) [r, g, b] = [1, c, 0];
	else if (h < 120) [r, g, b] = [c, 1, 0];
	else if (h < 180) [r, g, b] = [0, 1, c];
	else if (h < 240) [r, g, b] = [0, c, 1];
	else if (h < 300) [r, g, b] = [c, 0, 1];
	else [r, g, b] = [1, 0, c];
	return [r, g, b];
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

const GRAY = doc.createMaterial('dbg-other').setBaseColorFactor([0.15, 0.15, 0.15, 1]).setMetallicFactor(0).setRoughnessFactor(0.9);
const legend = [];
NAMES.forEach((name, i) => {
	const hue = (360 / NAMES.length) * i;
	const color = hsl(hue);
	const mat = doc.createMaterial(`dbg-${name}`).setBaseColorFactor([...color, 1]).setMetallicFactor(0).setRoughnessFactor(0.9);
	legend.push(`${name}: rgb(${color.map((c) => Math.round(c * 255)).join(',')})`);
	const mesh = doc.getRoot().listMeshes().find((m) => m.getName() === name);
	if (mesh) for (const prim of mesh.listPrimitives()) prim.setMaterial(mat);
});
for (const mesh of doc.getRoot().listMeshes()) {
	if (NAMES.includes(mesh.getName())) continue;
	for (const prim of mesh.listPrimitives()) prim.setMaterial(GRAY);
}
console.log(legend.join('\n'));

for (const mesh of doc.getRoot().listMeshes()) {
	for (const prim of mesh.listPrimitives()) {
		const idx = prim.getIndices();
		if (!idx || idx.getCount() < 6000) continue;
		simplifyPrimitive(prim, { simplifier: MeshoptSimplifier, ratio: 0.05, error: 0.001, lockBorder: true });
	}
}

await doc.transform(prune(), draco({ quantizePosition: 14, quantizeNormal: 10 }));
await io.write(output, doc);
console.log('rainbow debug glb written:', output);
