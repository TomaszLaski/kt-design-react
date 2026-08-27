import Reveal from '../ui/Reveal';
import './Statement.css';

export default function Statement() {
	return (
		<section className="on-bone section-pad statement-section">
			<Reveal className="wrap statement">
				<div className="eyebrow">
					<span className="num">00</span> VIZCO
				</div>
				<div className="statement-grid" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
					<div>
						<strong>Co robimy</strong>
						Wizualizacje 3D wnętrz i produktów, packshoty, branding i strony internetowe — łącznie z
						materiałami na social media, ulotki i banery.
					</div>
					<div>
						<strong>Dla kogo</strong>
						Dla każdego, kto musi sprzedać obrazem to, czego jeszcze nie da się sfotografować — od
						dewelopera po markę, która dopiero startuje.
					</div>
					<div>
						<strong>Zakres prac</strong>
						Od pierwszego kadru po social media, ulotki i wdrożenie strony — jeden zespół, jeden spójny
						styl.
					</div>
				</div>
			</Reveal>
		</section>
	);
}
