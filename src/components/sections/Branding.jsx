import Figure from '../ui/Figure';
import Reveal from '../ui/Reveal';
import './Branding.css';

const tags = ['Nazwa & logo', 'Opakowanie', 'Wizualizacje 3D', 'Materiały drukowane'];

export default function Branding() {
	return (
		<section className="on-ink section-pad branding">
			<div className="wrap">
				<Reveal className="brand-case">
					<div className="brand-copy">
						<div className="eyebrow">
							<span className="num">04</span> Branding od podstaw
						</div>
						<h2 className="headline">
							Marka, która ma swoją <b>historię</b> — od nazwy po opakowanie
						</h2>
						<p className="lede" style={{ marginTop: 20 }}>
							Nazwa, logotyp, opakowanie, wizytówki i wizualizacje produktowe — spójny system, gotowy do
							rozwijania na kolejne produkty w linii.
						</p>
						<div className="brand-tags">
							{tags.map((t) => (
								<span key={t}>{t}</span>
							))}
						</div>
					</div>
					<div className="imgs">
						<Figure src="/work/brand-1.jpg" alt="Opakowanie świecy Rue Des Ombres na czarnym tle" />
						<Figure src="/work/brand-2.jpg" alt="Wizytówki marki Rue Des Ombres z logo węża" />
						<Figure
							className="wide"
							src="/work/brand-wide.jpg"
							alt="Wzór opakowania Rue Des Ombres powielony na sześcianach"
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
