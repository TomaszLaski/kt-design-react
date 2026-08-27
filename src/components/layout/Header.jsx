import { useEffect, useState } from 'react';
import './Header.css';

const links = [
	['#prace', 'Prace'],
	['#strony', 'Strony WWW'],
	['#model', 'Model 3D'],
	['#kontakt', 'Kontakt'],
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const html = document.documentElement;
		html.style.overflow = open ? 'hidden' : '';
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			html.style.overflow = '';
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' is-open' : ''}`} id="nav">
			<a className="nav-mark" href="#top" onClick={() => setOpen(false)}>
				VIZCO
			</a>
			<nav className="nav-links" aria-label="Główne">
				{links.map(([href, label]) => (
					<a key={href} href={href}>
						{label}
					</a>
				))}
			</nav>
			<button
				className="nav-toggle"
				aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
				aria-expanded={open}
				onClick={() => setOpen((v) => !v)}
			>
				<span />
				<span />
			</button>
			{open && (
				<div className="nav-drawer">
					{links.map(([href, label]) => (
						<a key={href} href={href} onClick={() => setOpen(false)}>
							{label}
						</a>
					))}
				</div>
			)}
		</header>
	);
}
