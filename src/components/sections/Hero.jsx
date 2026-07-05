import Button from '../ui/Button';
import ViewportFrame from '../ui/ViewportFrame';
import './Hero.css';

const hud = [
	{ label: 'SHOT_01 ·', value: '85 mm' },
	{ label: 'Corona Renderer ·', value: '4K' },
	{ label: 'Variants:', value: 'Unlimited' },
	{ label: 'Reshoots:', value: 'None needed' },
];

export default function Hero() {
	return (
		<>
			<div className="hero" id="top">
				<p className="eyebrow mono">Product rendering · Web · Marketing content</p>
				<h1>
					Your product, photoreal — <em>before the first unit exists.</em>
				</h1>
				<div className="hero-sub">
					<p>
						VIZCO builds studio-grade product imagery in 3D. Every angle, every
						colorway, every format — packshots, catalogs, website, social media and
						reels — produced from a single digital model, on your schedule, with
						total control over light and detail.
					</p>
					<div className="hero-cta">
						<Button href="#contact">Start a project</Button>
						<Button variant="outline" href="#work">
							See the work →
						</Button>
					</div>
				</div>
			</div>

			<div className="hero-viewport">
				<ViewportFrame
					aspect="21 / 9"
					variant="shadow"
					hud={hud}
					ariaLabel="Hero product render placeholder"
				>
				<div className="hero-render">
					<span className="placeholder-tag mono">
						Hero product render — your flagship piece here
					</span>
				</div>
				</ViewportFrame>
			</div>
			<div className="spacer-under-viewport" />
		</>
	);
}
