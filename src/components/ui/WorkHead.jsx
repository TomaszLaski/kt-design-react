import './WorkHead.css';
import Reveal from './Reveal';

export default function WorkHead({ num, label, title, side }) {
	return (
		<Reveal className="work-head">
			<div>
				<div className="eyebrow">
					<span className="num">{num}</span> {label}
				</div>
				<h2 className="headline">{title}</h2>
			</div>
			{side ? <div className="side">{side}</div> : null}
		</Reveal>
	);
}
