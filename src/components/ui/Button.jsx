import './Button.css';

/**
 * Button / link.
 * variant: 'primary' (orange) | 'dark' | 'outline'
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({ variant = 'primary', href, children, className = '', ...rest }) {
	const cls = ['btn', variant !== 'primary' && `btn--${variant}`, className]
		.filter(Boolean)
		.join(' ');

	if (href) {
		return (
			<a className={cls} href={href} {...rest}>
				{children}
			</a>
		);
	}
	return (
		<button className={cls} {...rest}>
			{children}
		</button>
	);
}
