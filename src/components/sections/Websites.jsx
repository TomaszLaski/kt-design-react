import WorkHead from '../ui/WorkHead';
import Reveal from '../ui/Reveal';
import './Websites.css';

const offers = [
	{
		tag: '01',
		h: 'Landing i strona marki',
		p: 'Jednostronicowa lub wielostronicowa witryna zaprojektowana wokół Twoich renderów — szybka, czytelna, nastawiona na kontakt i sprzedaż.',
	},
	{
		tag: '02',
		h: 'Strona projektu',
		p: 'Prezentacja inwestycji, kolekcji czy oferty — galeria, plany lub specyfikacja produktu, materiały sprzedażowe. Wygląd, który trzyma poziom wizualizacji.',
	},
	{
		tag: '03',
		h: 'Katalog produktu',
		p: 'Strona produktowa z packshotami, wariantami kolorystycznymi i modelem 3D do obracania — zamiast martwej galerii zdjęć.',
	},
	{
		tag: '04',
		h: 'Projekt i wdrożenie',
		p: 'Projektujemy wygląd i wdrażamy stronę w jednym studio. Bez oddzielnej agencji, bez rozjazdu między makietą a tym, co trafia online.',
	},
];

export default function Websites() {
	return (
		<section id="strony" className="on-bone section-pad">
			<div className="wrap">
				<WorkHead
					num="06"
					label="Strony internetowe"
					title={
						<>
							Strona, która nosi Twoje kadry <b>i domyka sprzedaż</b>
						</>
					}
					side="Projektujemy i wdrażamy witryny wokół wizualizacji — od strony inwestycji po katalog produktu. Ten sam język obrazu, od pierwszego renderu do ostatniego przycisku."
				/>
				<div className="web-layout">
					<Reveal className="browser">
						<div className="browser-bar">
							<span />
							<span />
							<span />
							<div className="browser-url">vizco.studio / twoja-marka</div>
						</div>
						<div className="browser-body">
							<div className="mini-nav">
								<b>ATELIER</b>
								<em>Kolekcja · Kontakt</em>
							</div>
							<div className="mini-hero">
								<img src="/work/interior-1.jpg" alt="" />
								<div className="mini-copy">
									<span>Nowa kolekcja</span>
									<strong>Obraz, który sprzedaje, zanim produkt trafi na półkę.</strong>
								</div>
							</div>
							<div className="mini-grid">
								<img src="/work/product-1.jpg" alt="" />
								<img src="/work/brand-1.jpg" alt="" />
								<img src="/work/interior-3.jpg" alt="" />
							</div>
						</div>
					</Reveal>
					<Reveal className="web-offers">
						{offers.map((o) => (
							<article key={o.tag} className="web-offer">
								<span className="tag">{o.tag}</span>
								<div>
									<h3>{o.h}</h3>
									<p>{o.p}</p>
								</div>
							</article>
						))}
					</Reveal>
				</div>
			</div>
		</section>
	);
}
