import { useCallback, useRef, useState } from 'react';
import './CompareSlider.css';

export default function CompareSlider({ layerA, layerB, leftLabel, rightLabel, hint }) {
	const root = useRef(null);
	const dragging = useRef(false);
	const [pos, setPos] = useState(0.5);

	const update = useCallback((clientX) => {
		const el = root.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		setPos(Math.min(1, Math.max(0, (clientX - rect.left) / rect.width)));
	}, []);

	const pct = pos * 100;

	return (
		<div>
			<div
				ref={root}
				className="compare"
				onPointerDown={(e) => {
					dragging.current = true;
					root.current?.setPointerCapture(e.pointerId);
					update(e.clientX);
				}}
				onPointerMove={(e) => {
					if (e.pointerType === 'mouse' || dragging.current) update(e.clientX);
				}}
				onPointerUp={(e) => {
					dragging.current = false;
					if (root.current?.hasPointerCapture(e.pointerId)) {
						root.current.releasePointerCapture(e.pointerId);
					}
				}}
				onPointerCancel={() => {
					dragging.current = false;
				}}
				onMouseLeave={() => {
					if (!dragging.current) setPos(0.5);
				}}
			>
				<img className="layer-a" src={layerA} alt={leftLabel} draggable={false} />
				<img
					className="layer-b"
					src={layerB}
					alt={rightLabel}
					draggable={false}
					style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
				/>
				<div className="divider" style={{ left: `${pct}%` }} />
				<div className="handle" style={{ left: `${pct}%` }}>
					<span />
					<span />
				</div>
				<div className="tag left">{leftLabel}</div>
				<div className="tag right">{rightLabel}</div>
			</div>
			{hint ? (
				<div className="packshot-hint">
					<span className="hint-desk">{hint}</span>
					<span className="hint-touch">Przeciągnij palcem, aby porównać</span>
				</div>
			) : null}
		</div>
	);
}
