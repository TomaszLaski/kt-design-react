import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import dom from './../../assets/dom.jpg';
import './Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';

function Portfolio() {
    const [open, setOpen] = React.useState(false);
	const gallery = [
		{ id: 1, label: dom },
		{ id: 2, label: dom },
		{ id: 3, label: dom },
		{ id: 4, label: dom },
		{ id: 5, label: dom },
		{ id: 6, label: dom },
		{ id: 7, label: dom },
		{ id: 8, label: dom },
	];
	const renderedImages = gallery.map((image) => {
		return (
			<Col key={image.id} xs={12} md={6} lg={6}>
				<img
					className='entryImg'
					key={image.id}
					src={image.label}
					onClick={() => setOpen(true)}
				/>
			</Col>
		);
	});
	return (
		<Layout>
			<Container>
				<Row>{renderedImages}</Row>
			</Container>

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={[{ src: dom }, { src: dom }, { src: dom }]}
			/>
		</Layout>
	);
}

export default Portfolio
