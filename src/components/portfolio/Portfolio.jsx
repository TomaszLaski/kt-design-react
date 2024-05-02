import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Portfolio.css';
import { Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';
import { Card, CardBody, Image } from '@nextui-org/react';
import VisualModal from '../modal/VisualModal';

import multiple1_main from '../../../src/assets/1/main.jpg';
import multiple1_second from '../../../src/assets//1/second.jpg';
import multiple2_main from '../../../src/assets//2/main.jpg';
import multiple2_second from '../../../src/assets//2/second.jpg';
import multiple3_main from '../../../src/assets//3/main.jpg';
import multiple3_second from '../../../src/assets//3/second.jpg';
import multiple4_main from '../../../src/assets//4/main.jpg';
import multiple4_second from '../../../src/assets//4/second.jpg';
import multiple5_main from '../../../src/assets//5/main.jpg';
import multiple5_second from '../../../src/assets//5/second.jpg';

import single1 from '../../../src/assets//single/1.jpg';
import single2 from '../../../src/assets//single/2.jpg';
import single3 from '../../../src/assets//single/3.jpg';
import single4 from '../../../src/assets//single/4.jpg';
import single5 from '../../../src/assets//single/5.jpg';
import single6 from '../../../src/assets//single/6.jpg';
import single7 from '../../../src/assets//single/7.jpg';
import single8 from '../../../src/assets//single/8.jpg';
import single9 from '../../../src/assets//single/9.jpg';
import single10 from '../../../src/assets//single/10.jpg';
import single11 from '../../../src/assets//single/11.jpg';

function Portfolio() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const gallery = [
		{
			id: 1,
			main: multiple1_main,
			second: multiple1_second,
			folder: 'multiple',
		},
		{
			id: 2,
			main: multiple2_main,
			second: multiple2_second,
			folder: 'multiple',
		},
		{
			id: 3,
			main: multiple3_main,
			second: multiple3_second,
			folder: 'multiple',
		},
		{
			id: 4,
			main: multiple4_main,
			second: multiple4_second,
			folder: 'multiple',
		},
		{
			id: 5,
			main: multiple5_main,
			second: multiple5_second,
			folder: 'multiple',
		},

		{ id: 7, main: single1, second: null, folder: 'single' },
		{ id: 8, main: single2, second: null, folder: 'single' },
		{ id: 9, main: single3, second: null, folder: 'single' },
		{ id: 10, main: single4, second: null, folder: 'single' },
		{ id: 11, main: single5, second: null, folder: 'single' },
		{ id: 12, main: single6, second: null, folder: 'single' },
		{ id: 13, main: single7, second: null, folder: 'single' },
		{ id: 14, main: single8, second: null, folder: 'single' },
		{ id: 15, main: single9, second: null, folder: 'single' },
		{ id: 16, main: single10, second: null, folder: 'single' },
		{ id: 17, main: single11, second: null, folder: 'single' },
	];

	const handleImageClick = (image) => {
		setSelectedImage(image);
		setModalOpen(true);
	};

	const renderedImages = gallery.map((image) => (
		<Col key={image.id} xs={12} md={6} lg={4}>
			<Card className='image-container'>
				<CardBody>
					<Image
						onClick={() => handleImageClick(image)}
						className={`entryImg ${image.second ? 'hovered' : ''}`}
						src={image.second ? image.second : image.main}
						alt='Gallery image'
						style={{
							width: '100%',
							aspectRatio: '4 / 3',
							objectFit: 'cover',
							borderRadius: '8px',
						}}
					/>
				</CardBody>
			</Card>
		</Col>
	));

	return (
		<Layout>
			<VisualModal
				isOpen={modalOpen}
				onOpen={() => setModalOpen(true)} 
				onClose={() => setModalOpen(false)}
				image={selectedImage}
			/>
			<Col className='gallery'>
				<Row>{renderedImages}</Row>
			</Col>
		</Layout>
	);
}
export default Portfolio;
