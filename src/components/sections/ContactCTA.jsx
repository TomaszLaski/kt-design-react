import './ContactCTA.css';

export default function ContactCTA() {
	return (
		<section id="contact" className="cta">
			<span className="mono">Contact</span>
			<h2>Send us your product. Get a test frame back.</h2>
			<p>
				Share a CAD file, technical drawing, sketch or even a phone photo of your
				product — we'll show you what it looks like as a hero shot.
			</p>
			<div className="row">
				<a className="btn" href="mailto:klaudiatarkowska2@gmail.com">
					klaudiatarkowska2@gmail.com
				</a>
				<a
					className="btn"
					href="https://www.instagram.com/vizco_studio/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram →
				</a>
				<a
					className="btn"
					href="https://www.behance.net/klaudiatarkows1"
					target="_blank"
					rel="noopener noreferrer"
				>
					Behance →
				</a>
			</div>
			<p className="cta-contact mono">(+48) 514 596 199</p>
		</section>
	);
}
