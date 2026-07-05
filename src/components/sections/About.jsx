import SectionHead from '../ui/SectionHead';
import ViewportFrame from '../ui/ViewportFrame';
import portrait from '@/assets/Myself.jpg';
import './About.css';

export default function About() {
	return (
		<section id="about" className="about">
			<SectionHead label="About / Founder">The studio</SectionHead>
			<div className="about-grid">
				<ViewportFrame
					aspect="3 / 3.6"
					variant="orange"
					className="about-portrait"
					ariaLabel="Portrait of Klaudia, founder of VIZCO"
				>
					<img className="vf-img" src={portrait} alt="Klaudia, founder of VIZCO" />
				</ViewportFrame>
				<div>
					<h3>Klaudia — Founder & Lead Artist</h3>
					<span className="role mono">Founder & Freelancer · VIZCO</span>
					<p>
						I specialize in architectural and interior visualizations. I have a
						background in interior design (Certificate, School of Design and Creative
						Initiatives Kappa, 2020), which gave me a solid foundation in interior
						architecture and aesthetics.
					</p>
					<p>
						Over time I expanded my skills into image post-production, motion graphics
						and UI/UX — which is why VIZCO can take a product from a raw 3D model all
						the way to the website, catalog and social feed it lives on.
					</p>
					<div className="cred">
						<div>
							<span className="mono">Education</span>
							<b>Interior Design Certificate — Kappa, 2020</b>
						</div>
						<div>
							<span className="mono">Focus</span>
							<b>Product · Archviz · Motion · UI/UX</b>
						</div>
						<div>
							<span className="mono">Based in</span>
							<b>Gdańsk, Poland</b>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
