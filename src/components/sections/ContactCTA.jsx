import './ContactCTA.css';

export default function ContactCTA() {
	return (
		<footer id="kontakt" className="contact">
			<div className="wrap">
				<div className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>
					Kontakt
				</div>
				<h2>
					Masz produkt, wnętrze
					<br />
					albo markę do pokazania?
				</h2>
				<p className="contact-lede">Napisz, co chcesz pokazać — odpiszemy z pomysłem na pierwszy kadr.</p>
				<div className="row">
					<a className="contact-cta" href="mailto:hello@vizco.studio">
						hello@vizco.studio
						<span className="contact-cta-arrow" aria-hidden="true">
							→
						</span>
					</a>
					<div className="contact-meta">
						Gdańsk, Polska
						<br />
						Projekty stacjonarne i zdalne
					</div>
				</div>
				<div className="foot-bottom">
					<span>© VIZCO — Studio wizualizacji 3D</span>
					<span>Gdańsk, Polska</span>
				</div>
			</div>
		</footer>
	);
}
