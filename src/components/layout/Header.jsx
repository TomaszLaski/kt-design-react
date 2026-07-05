import { useState } from 'react';
import Button from '../ui/Button';
import './Header.css';

const links = [
	['#why', 'Why render'],
	['#services', 'Deliverables'],
	['#pipeline', 'Process'],
	['#work', 'Work'],
	['#about', 'Studio'],
];

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<a className="logo" href="#top">
				VIZCO<sup>®</sup>
			</a>
			<nav aria-label="Main" className={open ? 'open' : ''}>
				{links.map(([href, label]) => (
					<a key={href} href={href} onClick={() => setOpen(false)}>
						{label}
					</a>
				))}
			</nav>
			<div className="header-actions">
				<Button href="#contact">Get a test render</Button>
				<button
					className="nav-toggle"
					aria-label="Menu"
					aria-expanded={open}
					onClick={() => setOpen((o) => !o)}
				>
					☰
				</button>
			</div>
		</header>
	);
}
