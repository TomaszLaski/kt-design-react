import SectionHead from '../ui/SectionHead';
import './Pipeline.css';

const steps = [
	{
		n: '01',
		h: 'Model & render',
		p: 'We build the 3D asset from your files, sketches or a physical sample — then light it like a hero.',
	},
	{
		n: '02',
		h: 'Content kit',
		p: 'Packshots, catalog shots, lifestyle scenes and every format your channels need — one consistent look.',
	},
	{
		n: '03',
		h: 'Website',
		p: 'Landing page or product site designed in Figma around your new imagery, built to convert.',
	},
	{
		n: '04',
		h: 'Social & motion',
		p: 'Reels, animated loops and ad creatives that keep the same asset working across every feed.',
	},
];

export default function Pipeline() {
	return (
		<section id="pipeline" className="pipeline">
			<SectionHead label="Process / render → market">
				One partner,
				<br />
				<em>the whole pipeline.</em>
			</SectionHead>
			<div className="pipe-grid">
				{steps.map((s, i) => (
					<div className="step" key={s.n}>
						<div className="num">{s.n}</div>
						<h3>{s.h}</h3>
						<p>{s.p}</p>
						<span className="step-arrow" aria-hidden="true">
							{i === steps.length - 1 ? '✓' : '→'}
						</span>
					</div>
				))}
			</div>
			<p className="pipe-note">
				No handoffs between agencies, no visual drift between your packshot and your
				homepage. <b>One 3D asset becomes your entire brand presence.</b>
			</p>
		</section>
	);
}
