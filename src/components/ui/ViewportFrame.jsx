import './ViewportFrame.css';

/**
 * Signature "renderer viewport" frame: bordered box with camera corners and an
 * optional HUD metadata bar.
 *
 * props:
 *  - children   visual content (image or gradient placeholder)
 *  - aspect     CSS aspect-ratio for the frame, e.g. "21/9", "3/3.6"
 *  - hud        optional array of { label, value } rendered in the HUD bar
 *  - variant    'shadow' (orange drop shadow) | 'orange' (orange border)
 *  - ariaLabel  accessible label; also sets role="img"
 */
export default function ViewportFrame({
	children,
	aspect = '21/9',
	hud,
	variant,
	ariaLabel,
	className = '',
}) {
	const cls = [
		'viewport',
		variant === 'shadow' && 'viewport--shadow',
		variant === 'orange' && 'viewport--orange',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={cls} role={ariaLabel ? 'img' : undefined} aria-label={ariaLabel}>
			<div className="vf-frame" style={{ '--vf-aspect': aspect }}>
				{children}
				<span className="corner tl" />
				<span className="corner tr" />
				<span className="corner bl" />
				<span className="corner br" />
			</div>
			{hud && hud.length > 0 && (
				<div className="hud mono">
					{hud.map((item) => (
						<span key={item.label}>
							{item.label} <b>{item.value}</b>
						</span>
					))}
				</div>
			)}
		</div>
	);
}
