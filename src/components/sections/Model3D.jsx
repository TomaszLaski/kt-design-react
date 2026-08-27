import { lazy, Suspense } from 'react';
import WorkHead from '../ui/WorkHead';
import Reveal from '../ui/Reveal';
import './Model3D.css';

const StudioViewer = lazy(() => import('../model/StudioViewer'));

const notes = [
	{
		n: '01',
		h: 'Klient ogląda jak na żywo',
		p: 'Obraca i przybliża produkt, jakby trzymał go w ręku. Żadnych domysłów w stylu „a jak to wygląda z tyłu?" — widzi dokładnie to, co dostanie.',
	},
	{
		n: '02',
		h: 'Więcej zaufania, mniej zwrotów',
		p: 'Kto obejrzał produkt ze wszystkich stron, kupuje pewniej i rzadziej odsyła. Taka prezentacja odpowiada na pytania, zanim klient zdąży je zadać.',
	},
	{
		n: '03',
		h: 'Wyróżniasz się na tle konkurencji',
		p: 'Inni pokazują zdjęcia. U Ciebie produkt można „wziąć do ręki" — na telefonie i na komputerze, bez instalowania czegokolwiek.',
	},
];

export default function Model3D() {
	return (
		<section id="model" className="on-ink section-pad">
			<div className="wrap">
				<div className="model-layout">
					<div>
						<WorkHead
							num="07"
							label="Model 3D"
							title={
								<>
									Twój produkt — <b>w rękach klienta</b>
								</>
							}
							side="Obróć, przybliż, obejrzyj każdy detal — dokładnie tak klienci będą oglądać Twój produkt na Twojej stronie. Zegarek jest tylko przykładem."
						/>
						<ol className="model-steps">
							{notes.map((s) => (
								<li key={s.n}>
									<b>{s.n}</b>
									<div>
										<h3>{s.h}</h3>
										<p>{s.p}</p>
									</div>
								</li>
							))}
						</ol>
					</div>
					<Reveal className="model-stage">
						<div className="model-frame">
							<Suspense fallback={<div className="model-fallback">Przygotowujemy prezentację…</div>}>
								<StudioViewer />
							</Suspense>
							<div className="model-hud">
								<span>Przeciągnij, aby obrócić</span>
								<span>Przybliż palcami lub kółkiem</span>
								<span>Każdy detal na wyciągnięcie ręki</span>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
