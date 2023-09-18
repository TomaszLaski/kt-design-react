import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Portfolio.css';
import { Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';

function Portfolio() {
	const [open, setOpen] = useState(false);
	const [activeImages, setActiveImages] = useState([]);
	const [hoveredImages, setHoveredImages] = useState([]);
	const gallery = [];
	for (let i = 1; i <= 5; i++) {
		gallery.push({
			id: i,
			main: `src/assets/${i}/main.jpg`,
			second: `src/assets/${i}/second.jpg`,
			folder: 'multiple',
		});
	}

	for (let i = 1; i <= 11; i++) {
		gallery.push({
			id: i + 6,
			main: `src/assets/single/${i}.jpg`,
			second: null,
			folder: 'single',
		});
	}
	const handleMouseEnter = (imageId) => {
		if (!hoveredImages.includes(imageId)) {
			setHoveredImages((prevHoveredImages) => [...prevHoveredImages, imageId]);
		}
	};

	const handleMouseLeave = () => {
		setHoveredImages([]);
	};

	const handleImageClick = (folder, id) => {
		if (open) {
			setOpen(false);
		}

		const image = gallery.find((img) => img.id === id && img.folder === folder);

		if (!image) return;

		const combinedImages = [];

		combinedImages.push({ src: image.main });

		if (image.second) {
			combinedImages.push({ src: image.second });
		}

		setActiveImages(combinedImages);
		setOpen(true);
	};

	const renderedImages = gallery.map((image) => (
		<Col key={image.id} xs={12} md={6} lg={4}>
			<div
				className='image-container'
				onMouseEnter={() => image.second && handleMouseEnter(image.id)}
				onMouseLeave={() => image.second && handleMouseLeave()}
			>
				<img
					className={`entryImg ${
						image.second && hoveredImages.includes(image.id) ? 'hovered' : ''
					}`}
					src={
						image.second && hoveredImages.includes(image.id)
							? image.second
							: image.main
					}
					onClick={() => handleImageClick(image.folder, image.id)}
					alt='Gallery image'
					style={{
						width: '100%',
						aspectRatio: '4 / 3',
						objectFit: 'cover',
						borderRadius: '8px',
					}}
				/>
			</div>
		</Col>
	));

	const lightboxSlides = activeImages.map((image) => image);

	return (
		<Layout>
			<Col className='gallery'>
				<Row>{renderedImages}</Row>
			</Col>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={lightboxSlides}
			/>
		</Layout>
	);
}

export default Portfolio;
