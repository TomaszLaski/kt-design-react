import React, { useState } from 'react';
import './Portfolio.css';
import { Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';
import { Card, CardBody, Image } from '@nextui-org/react';
import VisualModal from '../modal/VisualModal';

function Portfolio() {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedFolder, setSelectedFolder] = useState(null);

	const gallery = [
		{
			id: 1,
			folder: 'single',
			images: ['1.jpg'],
		},
		{
			id: 2,
			folder: 'single',
			images: ['startowe.jpg'],
		},
		{
			id: 3,
			folder: 'single',
			images: ['halloween.jpg'],
		},
		{
			id: 4,
			folder: 'eca',
			images: Array.from({ length: 6 }, (_, i) => `${i + 1}.jpg`),
		},
		{
			id: 5,
			folder: 'fritti',
			images: Array.from({ length: 6 }, (_, i) => `fritti${i + 1}.jpg`),
		},
		{
			id: 6,
			folder: 'IceCubes',
			images: Array.from({ length: 2 }, (_, i) => `${i + 1}.jpg`),
		},
		{
			id: 7,
			folder: 'mieszkanie',
			images: Array.from({ length: 6 }, (_, i) => `MIESZKANIE${i + 1}.jpg`),
		},
		{
			id: 8,
			folder: 'sofas',
			images: Array.from({ length: 2 }, (_, i) => `${i + 1}.jpg`),
		},
		{
			id: 9,
			folder: 'sofal',
			images: Array.from({ length: 2 }, (_, i) => `${i + 1}.jpg`),
		},
		{
			id: 10,
			folder: 'stodoła',
			images: Array.from({ length: 3 }, (_, i) => `${i + 1}.jpg`),
		},
		{
			id: 11,
			folder: 'single',
			images: ['sypialnia.jpg'],
		},
		{
			id: 12,
			folder: 'single',
			images: ['bed.jpg'],
		},
	];

	const handleImageClick = (folder) => {
		setSelectedImage(folder.images);
		setSelectedFolder(folder);
		setModalOpen(true);
	};
	const renderedImages = gallery.map((folder, index) => (
		<Col key={`${folder.id}-${index}`} xs={12} md={6} lg={4} className='p-2'>
			<Card className='image-container rounded-none p-0'>
				<CardBody className='p-0'>
					<Image
						onClick={() => handleImageClick(folder)}
						className={`entryImg ${index === 1 ? 'hovered' : ''}`}
						src={`src/assets/${folder.folder}/${folder.images[0]}`}
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
