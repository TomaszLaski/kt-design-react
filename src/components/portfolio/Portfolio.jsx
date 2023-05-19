import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import dom from './../../assets/dom.jpg';
import logo from './../../assets/img1.jpg';
import logo2 from './../../assets/KtDesign.jpg';
import logo3 from './../../assets/Myself.jpg';
import './Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';

function Portfolio() {
	const [open, setOpen] = useState(false);
	const [hoveredImages, setHoveredImages] = useState([]);

	const gallery = [
		{
			id: 1,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
		{
			id: 2,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
		{
			id: 3,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
		{
			id: 4,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
		{
			id: 5,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
		{
			id: 6,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
		{
			id: 7,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
		{
			id: 8,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
			text: 'text',
		},
	];
	const handleMouseEnter = (imageId) => {
		setHoveredImages((prevHoveredImages) => [...prevHoveredImages, imageId]);
	};

	const handleMouseLeave = () => {
		setHoveredImages([]);
	};

	const renderedImages = gallery.map((image) => (
		<Col key={image.id} xs={12} md={6} lg={6} xl={4}>
			<img
				onMouseEnter={() => handleMouseEnter(image.id)}
				onMouseLeave={handleMouseLeave}
				className={`entryImg ${
					hoveredImages.includes(image.id) ? 'hovered' : ''
				}`}
				src={
					hoveredImages.includes(image.id) ? image.images.img1 : image.project
				}
				onClick={() => setOpen(true)}
				style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover', // Adjust how the image fits within the container
        borderRadius: '8px', // Add a border radius to the image
      }}
			/>
			{hoveredImages.includes(image.id)&& (
				<div className='text-overlay'>
					<span>{image.text}</span>
				</div>
			)}
		</Col>
	));

	const lightboxSlides = gallery.map((image) => ({ src: image.images.img1 }));

	return (
		<Layout>
			<Col>
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