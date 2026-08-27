import SectionHead from '../ui/SectionHead';
import { deliverables } from '@/data/deliverables';
import './Deliverables.css';

export default function Deliverables() {
	return (
		<section id="services" className="deliverables-section">
			<SectionHead label="Deliverables">
				Everything your product
				<br />
				needs to <em>sell.</em>
			</SectionHead>
			<div className="deliv">
				{deliverables.map((d) => (
					<div className="deliv-row" key={d.name}>
						<div>
							<div className="d-name">{d.name}</div>
							<p className="d-desc">{d.desc}</p>
						</div>
						<span className="d-tag mono">{d.tag}</span>
					</div>
				))}
			</div>
		</section>
	);
}
