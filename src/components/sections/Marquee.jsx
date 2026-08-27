import './Marquee.css';

const items = [
	{ label: 'Wizualizacje wnętrz', dim: false },
	{ label: 'Wizualizacje produktowe', dim: true },
	{ label: 'Packshoty', dim: false },
	{ label: 'Branding', dim: true },
	{ label: 'Motion & social', dim: false },
	{ label: 'Strony WWW', dim: true },
];

export default function Marquee() {
	const loop = [...items, ...items];

	return (
		<div className="marquee" aria-hidden="true">
			<div className="marquee-track">
				{loop.map((item, i) => (
					<span key={`${item.label}-${i}`} className={item.dim ? 'dim' : undefined}>
						{item.label}
					</span>
				))}
			</div>
		</div>
	);
}
