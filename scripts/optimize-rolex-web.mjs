import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { weld, simplifyPrimitive, draco, prune, dedup } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';

const input = process.argv[2];
const output = process.argv[3];

function triCount(prim) {
	const indices = prim.getIndices();
	if (indices) return indices.getCount() / 3;
	const pos = prim.getAttribute('POSITION');
	return pos ? pos.getCount() / 3 : 0;
}

function settingsFor(tris) {
	if (tris >= 1_000_000) return { ratio: 0.12, error: 0.00055 };
	if (tris >= 250_000) return { ratio: 0.24, error: 0.00042 };
	if (tris >= 80_000) return { ratio: 0.4, error: 0.00035 };
	if (tris >= 20_000) return { ratio: 0.7, error: 0.00028 };
	return null;
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

let before = 0;
let after = 0;
for (const mesh of doc.getRoot().listMeshes()) {
	for (const prim of mesh.listPrimitives()) {
		const tris = triCount(prim);
		before += tris;
		const cfg = settingsFor(tris);
		if (!cfg) {
			after += tris;
			continue;
		}
		simplifyPrimitive(prim, {
			simplifier: MeshoptSimplifier,
			ratio: cfg.ratio,
			error: cfg.error,
		});
		const next = triCount(prim);
		after += next;
		console.log(
			`${mesh.getName() || '(mesh)'}  ${Math.round(tris).toLocaleString()} → ${Math.round(next).toLocaleString()} tris  (keep ${cfg.ratio}, err ${cfg.error})`,
		);
	}
}

await doc.transform(prune(), draco({ quantizePosition: 14, quantizeNormal: 12 }));
await io.write(output, doc);
console.log(`TOTAL tris ~ ${Math.round(before).toLocaleString()} → ${Math.round(after).toLocaleString()}`);
