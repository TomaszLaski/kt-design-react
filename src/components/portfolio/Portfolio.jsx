import React, { useState } from 'react';
import './Portfolio.css';
import { Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';
import { Card, CardBody, Image } from '@nextui-org/react';
import VisualModal from '../modal/VisualModal';
import single1 from '@/assets/single/1.jpg';
import startowe from '@/assets/single/startowe.jpg';
import halloween from '@/assets/single/halloween.jpg';
import eca1 from '@/assets/eca/1.jpg';
import eca2 from '@/assets/eca/2.jpg';
import eca3 from '@/assets/eca/3.jpg';
import eca4 from '@/assets/eca/4.jpg';
import eca5 from '@/assets/eca/5.jpg';
import eca6 from '@/assets/eca/6.jpg';
import fritti1 from '@/assets/fritti/fritti1.jpg';
import fritti2 from '@/assets/fritti/fritti2.jpg';
import fritti3 from '@/assets/fritti/fritti3.jpg';
import fritti4 from '@/assets/fritti/fritti4.jpg';
import fritti5 from '@/assets/fritti/fritti5.jpg';
import fritti6 from '@/assets/fritti/fritti6.jpg';
import iceCubes1 from '@/assets/IceCubes/1.jpg';
import iceCubes2 from '@/assets/IceCubes/2.jpg';
import mieszkanie1 from '@/assets/mieszkanie/MIESZKANIE1.jpg';
import mieszkanie2 from '@/assets/mieszkanie/MIESZKANIE2.jpg';
import mieszkanie3 from '@/assets/mieszkanie/MIESZKANIE3.jpg';
import mieszkanie4 from '@/assets/mieszkanie/MIESZKANIE4.jpg';
import mieszkanie5 from '@/assets/mieszkanie/MIESZKANIE5.jpg';
import mieszkanie6 from '@/assets/mieszkanie/MIESZKANIE6.jpg';
import sofas1 from '@/assets/sofas/1.jpg';
import sofas2 from '@/assets/sofas/2.jpg';
import sofal1 from '@/assets/sofal/1.jpg';
import sofal2 from '@/assets/sofal/2.jpg';
import stodola1 from '@/assets/stodola/1.jpg';
import stodola2 from '@/assets/stodola/2.jpg';
import stodola3 from '@/assets/stodola/3.jpg';
import sypialnia from '@/assets/single/sypialnia.jpg';
import bed from '@/assets/single/bed.jpg';

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
