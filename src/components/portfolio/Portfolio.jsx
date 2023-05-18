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
			text: 'Image 1',
			
		},
		{
			id: 2,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
		},
		{
			id: 3,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
		},
		{
			id: 4,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
		},
		{
			id: 5,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
		},
		{
			id: 6,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
		},
		{
			id: 7,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
		},
		{
			id: 8,
			project: dom,
			images: {
				img1: logo,
				img2: logo2,
				img3: logo3,
			},
		},
	];
	const handleMouseEnter = (imageId) => {
		setHoveredImages((prevHoveredImages) => [...prevHoveredImages, imageId]);
	  };
	
	  const handleMouseLeave = () => {
		setHoveredImages([]);
	  };
	
	  const renderedImages = gallery.map((image) => (
		<Col key={image.id} xs={12} md={6} lg={6}>
		  <div
			className="image-container"
			onMouseEnter={() => handleMouseEnter(image.id)}
			onMouseLeave={handleMouseLeave}
		  >
			<img
			  className="entryImg"
			  src={image.project}
			  onClick={() => setOpen(true)}
			/>
			{hoveredImages.includes(image.id) && (
			  <div className="text-overlay">
				<span>{image.text}</span>
			  </div>
			)}
		  </div>
		</Col>
	  ));
	
	  const lightboxSlides = gallery.map((image) => ({ src: image.project }));
	
	  return (
		<Layout>
		  <Container>
			<Row>{renderedImages}</Row>
		  </Container>
	
		  <Lightbox open={open} close={() => setOpen(false)} slides={lightboxSlides} />
		</Layout>
	  );
	}
	
	export default Portfolio;