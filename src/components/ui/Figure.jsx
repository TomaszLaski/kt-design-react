import './Figure.css';

export default function Figure({ src, alt, className = '', cap, style, imgStyle }) {
	return (
		<div className={`figure ${className}`.trim()} style={style}>
			<img src={src} alt={alt} loading="lazy" style={imgStyle} />
			{cap ? <div className="cap">{cap}</div> : null}
		</div>
	);
}
