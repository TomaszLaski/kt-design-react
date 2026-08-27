// One-off diagnostic #3: color CASE_BODY_MESHES bright cyan against
// everything else gray, to confirm the classification matches the physical
// case flank (not lugs/bracelet).
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

const CYAN = doc.createMaterial('dbg-case').setBaseColorFactor([0, 1, 1, 1]).setMetallicFactor(0).setRoughnessFactor(0.9);
const GRAY = doc.createMaterial('dbg-other').setBaseColorFactor([0.3, 0.3, 0.3, 1]).setMetallicFactor(0).setRoughnessFactor(0.9);

const CASE_BODY_MESHES = new Set(['Cylinder019', 'Object', 'Cylinder021', 'Box002', 'Object064', 'Box010', 'Box011', 'Box012', 'Box013']);

for (const mesh of doc.getRoot().listMeshes()) {
	const target = CASE_BODY_MESHES.has(mesh.getName()) ? CYAN : GRAY;
	for (const prim of mesh.listPrimitives()) prim.setMaterial(target);
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
console.log('case-body debug glb written:', output);
