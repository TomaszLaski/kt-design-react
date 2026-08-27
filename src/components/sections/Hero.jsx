import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
	const [tilt, setTilt] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMove = (e) => {
			if (window.innerWidth < 820) return;
			setTilt({
				x: (e.clientX / window.innerWidth - 0.5) * 14,
				y: (e.clientY / window.innerHeight - 0.5) * 10,
			});
		};
		window.addEventListener('mousemove', onMove, { passive: true });
		return () => window.removeEventListener('mousemove', onMove);
	}, []);

	return (
		<header className="hero" id="top">
			<div className="hero-eyebrow">Studio wizualizacji 3D &amp; brandingu — Gdańsk</div>
			<div className="hero-logo-wrap">
				<img
					className="hero-logo"
					src="/logo.png"
					alt="VIZCO — logo studia"
					style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
				/>
			</div>
			<p className="hero-tag">
				Zamieniamy Twój produkt, przestrzeń i markę w obrazy, którym trudno przewinąć dalej.
			</p>
			<div className="hero-scroll">
				<span>Przewiń</span>
				<div className="bar" />
			</div>
		</header>
	);
}
