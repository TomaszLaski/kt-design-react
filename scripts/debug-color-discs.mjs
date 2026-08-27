// One-off diagnostic: paint each dial-area disc candidate a distinct color
// so a screenshot reveals which mesh is the visible dial face.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { weld, simplifyPrimitive, draco, prune, dedup } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';

const [input, output] = process.argv.slice(2);

const COLORS = {
	Object068: [1, 0, 0], // red
	Cylinder010: [0, 1, 0], // green
	Box002: [0, 0.4, 1], // blue
	Cylinder021: [1, 1, 0], // yellow
	Object064: [1, 0, 1], // magenta
	Cylinder035: [0, 1, 1], // cyan
	Cylinder037: [1, 0.5, 0], // orange
};

if (MeshoptSimplifier.ready) await MeshoptSimplifier.ready;
const io = new NodeIO()
	.registerExtensions(ALL_EXTENSIONS)
	.registerDependencies({
		'draco3d.decoder': await draco3d.createDecoderModule(),
		'draco3d.encoder': await draco3d.createEncoderModule(),
	});

const doc = await io.read(input);
await doc.transform(dedup(), weld());

for (const mesh of doc.getRoot().listMeshes()) {
	const color = COLORS[mesh.getName()];
	if (!color) continue;
	const mat = doc
		.createMaterial(mesh.getName() + '-dbg')
		.setBaseColorFactor([...color, 1])
		.setMetallicFactor(0)
		.setRoughnessFactor(0.9);
	for (const prim of mesh.listPrimitives()) prim.setMaterial(mat);
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
console.log('debug glb written:', output);
