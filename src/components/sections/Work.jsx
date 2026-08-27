import WorkHead from '../ui/WorkHead';
import Figure from '../ui/Figure';
import Reveal from '../ui/Reveal';
import './Work.css';

const interiors = [
	{
		src: '/work/interior-1.jpg',
		alt: 'Narożnik sofy w jasnym, minimalistycznym salonie',
		className: 'tall',
		cap: 'Salon, narożnik — render wnętrza',
	},
	{
		src: '/work/interior-2.jpg',
		alt: 'Sypialnia z dużym łóżkiem i grafiką nad łóżkiem',
		cap: 'Sypialnia — kadr główny',
	},
	{
		src: '/work/interior-3.jpg',
		alt: 'Komoda z wazonem i książkami, kadr detaliczny',
		cap: 'Detal — komoda',
	},
	{
		src: '/work/interior-4.jpg',
		alt: 'Dom i sauna nad fiordem, projekt dla Frittihus',
		className: 'wide',
		cap: 'Dom i sauna nad fiordem — Frittihus (Szwecja)',
		imgStyle: { objectPosition: 'center 40%' },
	},
];

const products = [
	{
		src: '/work/product-1.jpg',
		alt: 'Modularny fotel tapicerowany welurem, render 3D',
		cap: 'Fotel modułowy — model 3D',
	},
	{
		src: '/work/product-2.jpg',
		alt: 'Modularny fotel z pufą, inne ujęcie',
		cap: 'Fotel modułowy — inne ujęcie',
	},
];

export default function Work() {
	return (
		<>
			<section id="prace" className="on-bone section-pad work-interiors">
				<div className="wrap">
					<WorkHead
						num="01"
						label="Wnętrza & architektura"
						title={
							<>
								Wnętrza, które sprzedają <b>zanim powstaną</b>
							</>
						}
						side="Realistyczne kadry mieszkań, domów i wnętrz komercyjnych — zanim jeszcze istnieją, albo zamiast kosztownej sesji zdjęciowej."
					/>
					<Reveal className="grid g-interiors">
						{interiors.map((img) => (
							<Figure key={img.src} {...img} />
						))}
					</Reveal>
				</div>
			</section>

			<section className="on-ink section-pad">
				<div className="wrap">
					<WorkHead
						num="02"
						label="Wizualizacje produktowe"
						title={
							<>
								Produkt zmodelowany <b>od zera</b>, gotowy do kampanii
							</>
						}
						side="Produkty modelowane na bazie dokumentacji lub skanu, osadzone w scenerii — render trudny do odróżnienia od sesji zdjęciowej."
					/>
					<Reveal className="grid g-two">
						{products.map((img) => (
							<Figure key={img.src} {...img} />
						))}
					</Reveal>
				</div>
			</section>
		</>
	);
}
