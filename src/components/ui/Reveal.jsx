import { useEffect, useRef } from 'react';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			el.classList.add('in');
			return;
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add('in');
					io.disconnect();
				}
			},
			{ threshold: 0.14 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
			{children}
		</Tag>
	);
}
