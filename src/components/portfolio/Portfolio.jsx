import React, { useState } from 'react';
import './Portfolio.css';
import { Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';
import { Card, CardBody, Image } from '@nextui-org/react';
import VisualModal from '../modal/VisualModal';

const single1 = new URL('@/assets/single/1.jpg', import.meta.url).href;
const startowe = new URL('@/assets/single/startowe.jpg', import.meta.url).href;
const halloween = new URL('@/assets/single/halloween.jpg', import.meta.url)
	.href;
const eca1 = new URL('@/assets/eca/1.jpg', import.meta.url).href;
const eca2 = new URL('@/assets/eca/2.jpg', import.meta.url).href;
const eca3 = new URL('@/assets/eca/3.jpg', import.meta.url).href;
const eca4 = new URL('@/assets/eca/4.jpg', import.meta.url).href;
const eca5 = new URL('@/assets/eca/5.jpg', import.meta.url).href;
const eca6 = new URL('@/assets/eca/6.jpg', import.meta.url).href;
const fritti1 = new URL('@/assets/fritti/fritti1.jpg', import.meta.url).href;
const fritti2 = new URL('@/assets/fritti/fritti2.jpg', import.meta.url).href;
const fritti3 = new URL('@/assets/fritti/fritti3.jpg', import.meta.url).href;
const fritti4 = new URL('@/assets/fritti/fritti4.jpg', import.meta.url).href;
const fritti5 = new URL('@/assets/fritti/fritti5.jpg', import.meta.url).href;
const fritti6 = new URL('@/assets/fritti/fritti6.jpg', import.meta.url).href;
const iceCubes1 = new URL('@/assets/IceCubes/1.jpg', import.meta.url).href;
const iceCubes2 = new URL('@/assets/IceCubes/2.jpg', import.meta.url).href;
const mieszkanie1 = new URL(
	'@/assets/mieszkanie/MIESZKANIE1.jpg',
	import.meta.url
).href;
const mieszkanie2 = new URL(
	'@/assets/mieszkanie/MIESZKANIE2.jpg',
	import.meta.url
).href;
const mieszkanie3 = new URL(
	'@/assets/mieszkanie/MIESZKANIE3.jpg',
	import.meta.url
).href;
const mieszkanie4 = new URL(
	'@/assets/mieszkanie/MIESZKANIE4.jpg',
	import.meta.url
).href;
const mieszkanie5 = new URL(
	'@/assets/mieszkanie/MIESZKANIE5.jpg',
	import.meta.url
).href;
const mieszkanie6 = new URL(
	'@/assets/mieszkanie/MIESZKANIE6.jpg',
	import.meta.url
).href;
const sofas1 = new URL('@/assets/sofas/1.jpg', import.meta.url).href;
const sofas2 = new URL('@/assets/sofas/2.jpg', import.meta.url).href;
const sofal1 = new URL('@/assets/sofal/1.jpg', import.meta.url).href;
const sofal2 = new URL('@/assets/sofal/2.jpg', import.meta.url).href;
const stodola1 = new URL('@/assets/stodola/1.jpg', import.meta.url).href;
const stodola2 = new URL('@/assets/stodola/2.jpg', import.meta.url).href;
const stodola3 = new URL('@/assets/stodola/3.jpg', import.meta.url).href;
const sypialnia = new URL('@/assets/single/sypialnia.jpg', import.meta.url)
	.href;
const bed = new URL('@/assets/single/bed.jpg', import.meta.url).href;

function Portfolio() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedFolder, setSelectedFolder] = useState(null);
	const [selectedDescription, setSelectedDescription] = useState('');

	const gallery = [
		{
			id: 1,
			folder: 'single',
			images: [single1],
			description: 'Autumn visualization of modern architecture.',
		},
		{
			id: 2,
			folder: 'single',
			images: [startowe],
			description: 'Description in progress :)',
		},
		{
			id: 3,
			folder: 'single',
			images: [halloween],
			description: 'Description in progress :)',
		},
		{
			id: 4,
			folder: 'eca',
			images: [eca1, eca2, eca3, eca4, eca5, eca6],
			description: 'Description in progress :)',
		},
		{
			id: 5,
			folder: 'fritti',
			images: [fritti1, fritti2, fritti3, fritti4, fritti5, fritti6],
			description: 'Description in progress :)',
		},
		{
			id: 6,
			folder: 'IceCubes',
			images: [iceCubes1, iceCubes2],
			description: 'Description in progress :)',
		},
		{
			id: 7,
			folder: 'mieszkanie',
			images: [
				mieszkanie1,
				mieszkanie2,
				mieszkanie3,
				mieszkanie4,
				mieszkanie5,
				mieszkanie6,
			],
			description: 'Description in progress :)',
		},
		{
			id: 8,
			folder: 'sofas',
			images: [sofas1, sofas2],
			description: 'Description in progress :)',
		},
		{
			id: 9,
			folder: 'sofal',
			images: [sofal1, sofal2],
			description: 'Description in progress :)',
		},
		{
			id: 10,
			folder: 'stodola',
			images: [stodola1, stodola2, stodola3],
			description: 'Description in progress :)',
		},
		{
			id: 11,
			folder: 'single',
			images: [sypialnia],
			description: 'Description in progress :)',
		},
		{
			id: 12,
			folder: 'single',
			images: [bed],
			description: 'Description in progress :)',
		},
	];
	const handleImageClick = (folder) => {
		setSelectedImage(folder.images);
		setSelectedFolder(folder);
		setSelectedDescription(folder.description);
		setModalOpen(true);
	};

	const renderedImages = gallery.map((folder, index) => (
		<Col key={`${folder.id}-${index}`} xs={12} md={6} lg={4} className='p-2'>
			<Card className='image-container rounded-none p-0'>
				<CardBody className='p-0'>
					<Image
						onClick={() => handleImageClick(folder)}
						className={`entryImg ${index === 1 ? 'hovered' : ''}`}
						src={folder.images[0]}
						alt='Gallery image'
						style={{
							width: '100%',
							aspectRatio: '4 / 3',
							objectFit: 'cover',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							top: '10px',
							right: '10px',
							color: 'white',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							padding: '5px',
							borderRadius: '5px',
						}}
					>
						{folder.images.length}
					</div>
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
				images={selectedImage}
				folder={selectedFolder}
			/>
			<Col>
				<div className='px-5'>
					<Row>{renderedImages}</Row>
				</div>
			</Col>
		</Layout>
	);
}

export default Portfolio;
