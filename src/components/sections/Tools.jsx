import SectionHead from '../ui/SectionHead';
import './Tools.css';

const tools = [
	'3ds Max',
	'Corona Renderer',
	'Photoshop',
	'After Effects',
	'Figma',
	'ComfyUI',
	'DaVinci Resolve',
];

export default function Tools() {
	return (
		<section>
			<SectionHead label="Stack">Tools we work in</SectionHead>
			<div className="tools">
				{tools.map((t) => (
					<span key={t}>{t}</span>
				))}
			</div>
		</section>
	);
}
