import { useEffect, useRef, useState } from 'react';

const MODEL_SRC = '/models/rolex2-hq-v9.glb';

export default function StudioViewer() {
	const hostRef = useRef(null);
	const [active, setActive] = useState(false);
	const [progress, setProgress] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const host = hostRef.current;
		if (!host) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setActive(true);
					io.disconnect();
				}
			},
			{ rootMargin: '280px' },
		);
		io.observe(host);
		return () => io.disconnect();
	}, []);

	useEffect(() => {
		if (!active) return;
		const host = hostRef.current;
		if (!host) return;

		let cancelled = false;
		let viewer;

		async function setup() {
			try {
				const { ModelViewerElement } = await import('@google/model-viewer');
				ModelViewerElement.minimumRenderScale = window.matchMedia('(max-width: 700px)').matches
					? 0.75
					: 1;
			} catch {
				if (!cancelled) setError('Nie udało się wczytać prezentacji — odśwież stronę.');
				return;
			}
			if (cancelled || !hostRef.current) return;

			const compact = window.matchMedia('(max-width: 700px)').matches;
			viewer = document.createElement('model-viewer');
			viewer.src = MODEL_SRC;
			viewer.alt = 'Zegarek Rolex — interaktywny model 3D';
			viewer.setAttribute('camera-controls', '');
			viewer.setAttribute('touch-action', 'pan-y');
			viewer.setAttribute('auto-rotate', '');
			viewer.setAttribute('auto-rotate-delay', '2400');
			viewer.setAttribute('rotation-per-second', '10deg');
			viewer.setAttribute('interaction-prompt', 'auto');
			viewer.setAttribute('shadow-intensity', compact ? '0.4' : '0.7');
			viewer.setAttribute('shadow-softness', compact ? '0.8' : '0.55');
			viewer.setAttribute('environment-image', '/studio-env.png');
			viewer.setAttribute('exposure', '1.7');
			viewer.setAttribute('tone-mapping', 'commerce');
			viewer.setAttribute('camera-orbit', '38deg 68deg 92%');
			viewer.setAttribute('min-camera-orbit', 'auto 8deg auto');
			viewer.setAttribute('max-camera-orbit', 'auto 172deg auto');
			viewer.setAttribute('field-of-view', '22deg');
			viewer.setAttribute('min-field-of-view', '12deg');
			viewer.setAttribute('max-field-of-view', '34deg');
			viewer.setAttribute('interpolation-decay', '60');
			viewer.setAttribute('loading', 'eager');
			viewer.setAttribute('reveal', 'auto');
			viewer.setAttribute('disable-pan', '');
			viewer.style.cssText = 'width:100%;height:100%;background:transparent;outline:none;';

			viewer.addEventListener('progress', (event) => {
				const value = event.detail?.totalProgress ?? 0;
				setProgress(Math.round(value * 100));
			});
			viewer.addEventListener('load', () => {
				setLoaded(true);
				setProgress(100);
			});
			viewer.addEventListener('error', () => {
				setError('Nie udało się wczytać prezentacji — odśwież stronę.');
			});

			host.replaceChildren(viewer);
		}

		setup();

		return () => {
			cancelled = true;
			viewer?.remove();
			host.replaceChildren();
		};
	}, [active]);

	return (
		<div className="studio-mount">
			<div ref={hostRef} className="studio-mount__viewer" />
			{!loaded && !error && (
				<div className="model-fallback" aria-live="polite">
					<span>
						{active ? `Przygotowujemy prezentację… ${progress}%` : 'Za chwilę obejrzysz produkt z każdej strony'}
					</span>
					<div className="model-progress">
						<i style={{ width: `${active ? progress : 0}%` }} />
					</div>
				</div>
			)}
			{error ? <p className="studio-mount-error">{error}</p> : null}
		</div>
	);
}
