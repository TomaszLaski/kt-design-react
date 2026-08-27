import SectionHead from '../ui/SectionHead';
import './WhyRender.css';

const reasons = [
	{
		n: '01 · Pre-launch',
		h: 'Sell before production',
		p: "Launch campaigns, presale pages and investor decks with photoreal imagery of a product that hasn't left the factory yet — or doesn't exist at all.",
	},
	{
		n: '02 · Variants',
		h: 'Every version, one model',
		p: 'Colors, materials, sizes and configurations generated from a single 3D asset. Your whole catalog stays visually consistent, shot for shot.',
	},
	{
		n: '03 · Control',
		h: 'Perfect light, every time',
		p: 'No weather, no logistics, no compromises. We art-direct every reflection and shadow — and can match your existing brand photography exactly.',
	},
	{
		n: '04 · Iteration',
		h: 'Revisions without reshoots',
		p: 'New angle? New background? New season? We re-render instead of re-booking. Your imagery evolves as fast as your product does.',
	},
];

export default function WhyRender() {
	return (
		<section id="why">
			<SectionHead label="Why render / 4 reasons">
				The photo studio,
				<br />
				<em>rebuilt in 3D.</em>
			</SectionHead>
			<div className="why">
				{reasons.map((r) => (
					<div key={r.n}>
						<span className="mono">{r.n}</span>
						<h3>{r.h}</h3>
						<p>{r.p}</p>
					</div>
				))}
			</div>
		</section>
	);
}
