// One-off diagnostic #5: isolate a handful of candidate mesh names in
// stark primary colors against black, to settle ambiguous cases from the
// rainbow pass (similar hues were hard to tell apart by eye).
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { simplifyPrimitive, draco, prune, dedup, weld } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';

const [input, output] = process.argv.slice(2);
const targets = JSON.parse(process.argv[4]); // { MeshName: [r,g,b], ... }

if (MeshoptSimplifier.ready) await MeshoptSimplifier.ready;
const io = new NodeIO()
	.registerExtensions(ALL_EXTENSIONS)
	.registerDependencies({
		'draco3d.decoder': await draco3d.createDecoderModule(),
		'draco3d.encoder': await draco3d.createEncoderModule(),
	});

const doc = await io.read(input);
await doc.transform(dedup(), weld());

const BLACK = doc.createMaterial('dbg-black').setBaseColorFactor([0.03, 0.03, 0.03, 1]).setMetallicFactor(0).setRoughnessFactor(0.9);
for (const mesh of doc.getRoot().listMeshes()) {
	const color = targets[mesh.getName()];
	const mat = color
		? doc.createMaterial(`dbg-${mesh.getName()}`).setBaseColorFactor([...color, 1]).setMetallicFactor(0).setRoughnessFactor(0.9)
		: BLACK;
	for (const prim of mesh.listPrimitives()) prim.setMaterial(mat);
}

for (const mesh of doc.getRoot().listMeshes()) {
	for (const prim of mesh.listPrimitives()) {
		const idx = prim.getIndices();
		if (!idx || idx.getCount() < 6000) continue;
		simplifyPrimitive(prim, { simplifier: MeshoptSimplifier, ratio: 0.05, error: 0.001, lockBorder: true });
	}
}

await doc.transform(prune(), draco({ quantizePosition: 14, quantizeNormal: 10 }));
await io.write(output, doc);
console.log('isolate debug glb written:', output);
