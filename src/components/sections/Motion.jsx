import { useEffect, useRef } from 'react';
import WorkHead from '../ui/WorkHead';
import Reveal from '../ui/Reveal';
import './Motion.css';

const points = [
	'Ożywianie wizualizacji — render zamieniony w animację z ruchem kamery i światła.',
	'Montaż rolek w pionowym formacie, gotowych pod social media.',
	'Ulotki i banery spójne wizualnie z kampanią online.',
];

export default function Motion() {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const tryPlay = () => video.play().catch(() => {});
		tryPlay();
		document.addEventListener('click', tryPlay, { once: true });
		document.addEventListener('scroll', tryPlay, { once: true, passive: true });
		return () => {
			document.removeEventListener('click', tryPlay);
			document.removeEventListener('scroll', tryPlay);
		};
	}, []);

	return (
		<section className="on-bone section-pad">
			<div className="wrap">
				<WorkHead
					num="05"
					label="Motion & social"
					title={
						<>
							Statyczny render zamieniony w <b>storytelling, który sprzedaje</b>
						</>
					}
					side="Krótka narracja zmontowana z renderów — nie tylko pokazuje produkt czy wnętrze, ale buduje wokół niego emocje. Gotowa pod Reels, TikToka czy Stories."
				/>
				<Reveal className="motion-wrap">
					<div className="phone">
						<div className="notch" />
						<video
							ref={videoRef}
							src="/work/reel.mp4"
							muted
							loop
							playsInline
							autoPlay
							preload="metadata"
						/>
					</div>
					<ul className="motion-list">
						{points.map((p, i) => (
							<li key={p}>
								<b>0{i + 1}</b>
								<span>{p}</span>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
}
