import './SectionHead.css';

/**
 * Section heading: an uppercase H2 (pass emphasised parts as <em>) with a mono
 * label aligned to the right.
 */
export default function SectionHead({ children, label }) {
	return (
		<div className="sec-head">
			<h2>{children}</h2>
			{label && <span className="mono">{label}</span>}
		</div>
	);
}
