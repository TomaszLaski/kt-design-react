import WorkHead from '../ui/WorkHead';
import CompareSlider from '../ui/CompareSlider';
import Reveal from '../ui/Reveal';
import './Packshots.css';

export default function Packshots() {
	return (
		<section className="on-ink section-pad packshots">
			<div className="wrap">
				<WorkHead
					num="03"
					label="Packshoty"
					title={
						<>
							Jeden model, <b>dwie sceny</b>
						</>
					}
					side="Ten sam produkt — packshot studyjny na czarnym tle i wersja plenerowa w tej samej sesji. Przesuń kursorem po zdjęciu."
				/>
				<Reveal className="packshot-wrap">
					<CompareSlider
						layerA="/work/packshot-studio.jpg"
						layerB="/work/packshot-plener.jpg"
						leftLabel="Studio"
						rightLabel="Plener"
						hint="Przesuń kursorem, aby porównać"
					/>
					<div>
						<p className="lede" style={{ maxWidth: 440 }}>
							Packshot studyjny i wersja lifestylowa powstają z tego samego modelu — bez dwóch osobnych
							sesji, bez dwóch osobnych budżetów.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
