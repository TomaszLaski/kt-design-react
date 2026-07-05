import SectionHead from '../ui/SectionHead';
import { projects } from '@/data/projects';
import './Work.css';

export default function Work() {
	return (
		<section id="work">
			<SectionHead label="Portfolio / 2020–2026">Selected work</SectionHead>
			<div className="work-grid">
				{projects.map((p, i) => (
					<article className="work" key={`${p.title}-${i}`} style={{ gridColumn: `span ${p.span}` }}>
						<div className="frame" style={{ aspectRatio: p.aspect }}>
							{p.image ? (
								<img className="work-img" src={p.image} alt={p.alt || p.title} loading="lazy" />
							) : (
								<>
									<div className={`render ${p.tone}`} />
									<span className="placeholder-tag mono">Project image</span>
								</>
							)}
						</div>
						<div className="caption">
							<b>{p.title}</b>
							<span className="mono">{p.category}</span>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
