import React, { useState } from 'react';
import './Portfolio.css';
import { Row, Col } from 'react-bootstrap';
import Layout from '../layout/Layout';
import { Card, CardBody, Image } from '@nextui-org/react';
import VisualModal from '../modal/VisualModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';

const single1 = new URL('@/assets/single/1.jpg', import.meta.url).href;
const single1_thumb = new URL('@/assets/single/1_thumb.jpg', import.meta.url)
	.href;
const startowe = new URL('@/assets/single/startowe.jpg', import.meta.url).href;
const startowe_thumb = new URL(
	'@/assets/single/startowe_thumb.jpg',
	import.meta.url
).href;
const halloween = new URL('@/assets/single/halloween.jpg', import.meta.url);
const halloween_thumb = new URL(
	'@/assets/single/halloween_thumb.jpg',
	import.meta.url
).href;
const eca_thumb = new URL('@/assets/eca/eca_thumb.jpg', import.meta.url).href;
const eca1 = new URL('@/assets/eca/1.jpg', import.meta.url).href;
const eca2 = new URL('@/assets/eca/2.jpg', import.meta.url).href;
const eca3 = new URL('@/assets/eca/3.jpg', import.meta.url).href;
const eca4 = new URL('@/assets/eca/4.jpg', import.meta.url).href;
const eca5 = new URL('@/assets/eca/5.jpg', import.meta.url).href;
const eca6 = new URL('@/assets/eca/6.jpg', import.meta.url).href;
const fritti_thumb = new URL(
	'@/assets/fritti/fritti_thumb.jpg',
	import.meta.url
).href;
const fritti1 = new URL('@/assets/fritti/fritti1.jpg', import.meta.url).href;
const fritti2 = new URL('@/assets/fritti/fritti2.jpg', import.meta.url).href;
const fritti3 = new URL('@/assets/fritti/fritti3.jpg', import.meta.url).href;
const fritti4 = new URL('@/assets/fritti/fritti4.jpg', import.meta.url).href;
const fritti5 = new URL('@/assets/fritti/fritti5.jpg', import.meta.url).href;
const fritti6 = new URL('@/assets/fritti/fritti6.jpg', import.meta.url).href;
const iceCubes1 = new URL('@/assets/IceCubes/1.jpg', import.meta.url).href;
const iceCubes2 = new URL('@/assets/IceCubes/2.jpg', import.meta.url).href;
const iceCubes1_thumb = new URL(
	'@/assets/IceCubes/1_thumb.jpg',
	import.meta.url
).href;
const iceCubes2_thumb = new URL(
	'@/assets/IceCubes/2_thumb.jpg',
	import.meta.url
).href;
const mieszkanie1_thumb = new URL(
	'@/assets/mieszkanie/mieszkanie_thumb.jpg',
	import.meta.url
).href;
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
const sypialnia = new URL('@/assets/single/sypialnia1.jpg', import.meta.url)
	.href;
const bed = new URL('@/assets/single/bed1.jpg', import.meta.url).href;

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
			thumb: [single1_thumb],
			description:
				'The 3D visualization showcases a modern building in an urban setting, featuring an elegant dark facade in an autumn atmosphere. The project was created using 3ds Max and Corona Render.',
		},
		{
			id: 2,
			folder: 'single',
			images: [startowe],
			thumb: [startowe_thumb],
			description:
				'These visualizations were created in collaboration with the Swedish company Frittihus, a manufacturer of houses. Our task was to showcase the homes in their natural environment, allowing potential clients to better feel the atmosphere and character of these unique buildings. For this project, we used 3ds Max and Corona Render software.',
		},
		{
			id: 3,
			folder: 'single',
			images: [halloween],
			thumb: [halloween_thumb],
			description:
				'The visualization features a chair set in an unusual Halloween-themed scene. The project was created in 3ds Max using Corona Render.',
		},
		{
			id: 4,
			folder: 'eca',
			images: [eca1, eca2, eca3, eca4, eca5, eca6],
			thumb: [eca_thumb],
			description:
				'Interior visualizations created for Eca Design`s developer offer. Our task was to present several apartments with minimalist and functional furnishings, allowing potential clients to better envision their future interiors. We used 3ds Max and Corona Render software for this project.',
		},
		{
			id: 5,
			folder: 'fritti',
			images: [fritti1, fritti2, fritti3, fritti4, fritti5, fritti6],
			thumb: [fritti_thumb],
			description:
				'These visualizations were created in collaboration with the Swedish house manufacturer Frittihus. The goal was to depict a house and sauna situated on Swedish fjords, perfectly integrated into the pictures',
		},
		{
			id: 6,
			folder: 'IceCubes',
			images: [iceCubes1],
			thumb: [iceCubes1_thumb],
			description:
				'The 3D visualization, created in 3ds Max and rendered with Corona Renderer, showcases an architectural building designed to resemble ice cubes. The structure features clean, geometric lines with transparent and reflective surfaces, mimicking the appearance of crystal-clear ice. The lighting enhances the icy texture, casting soft shadows and creating a cool, crisp atmosphere. The realistic rendering highlights the unique design, making the building appear as a seamless assembly of ice blocks.',
		},
		{
			id: 7,
			folder: 'IceCubes',
			images: [iceCubes2],
			thumb: [iceCubes2_thumb],
			description:
				'The 3D visualization, created in 3ds Max and rendered with Corona Renderer, showcases an architectural building designed to resemble ice cubes. The structure features clean, geometric lines with transparent and reflective surfaces, mimicking the appearance of crystal-clear ice. The lighting enhances the icy texture, casting soft shadows and creating a cool, crisp atmosphere. The realistic rendering highlights the unique design, making the building appear as a seamless assembly of ice blocks.',
		},
		{
			id: 8,
			folder: 'mieszkanie',
			images: [
				mieszkanie1,
				mieszkanie2,
				mieszkanie3,
				mieszkanie4,
				mieszkanie5,
				mieszkanie6,
			],
			thumb: [mieszkanie1_thumb],
			description:
				'We created the interior design and visualizations for one of the real estate agents in Warsaw. The modern, minimalist interiors in light earthy tones create an elegant atmosphere. The visualizations, focused on details, add a unique character to the space. For this project, we used 3ds Max and Corona Render software.',
		},
		{
			id: 9,
			folder: 'sofas',
			images: [sofas1, sofas2],
			thumb: [sofas1],
			description:
				'Visualizations created for an upholstered furniture manufacturer. Our task was to model the furniture shape and produce product visualizations. The project was executed in 3ds Max using Corona Render and Marvelous Designer.',
		},
		{
			id: 10,
			folder: 'sofal',
			images: [sofal1, sofal2],
			thumb: [sofal1],
			description:
				'Visualizations created for an upholstered furniture manufacturer. Our task was to model the furniture shape and produce product visualizations. The project was executed in 3ds Max using Corona Render and Marvelous Designer.',
		},
		{
			id: 11,
			folder: 'stodola',
			images: [stodola1, stodola2, stodola3],
			thumb: [stodola1],
			description:
				'The project and visualizations were created for an architectural firm. The visualizations showcase the interior of a barn-style house, focusing on details and captured in the evening. The project was executed in 3ds Max using Corona Render.',
		},
		{
			id: 12,
			folder: 'single',
			images: [sypialnia],
			thumb: [sypialnia],
			description:
				'The visualization was created for a Polish furniture manufacturer. Our task was to showcase a bedroom furniture set in an arrangement. The project was executed in 3ds Max using V-ray.',
		},
		{
			id: 13,
			folder: 'single',
			images: [bed],
			thumb: [bed],
			description:
				'The visualization focuses on a piece of furniture: an upholstered bed in velvet fabric within a modern, minimalist interior. The project was executed in 3ds Max using V-Ray.',
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
						src={folder.thumb[0]}
						alt='Gallery image'
						style={{
							width: '100%',
							aspectRatio: '4 / 3',
							objectFit: 'cover',
						}}
					/>
					{folder.images.length > 1 && (
						<div
							style={{
								position: 'absolute',
								top: '10px',
								right: '10px',
								color: 'white',
								backgroundColor: 'rgba(0, 0, 0, 0.5)',
								padding: '5px',
								borderRadius: '5px',
								zIndex: 10, // Dodaj z-index, aby upewnić się, że ikona jest na wierzchu
							}}
						>
							<FontAwesomeIcon icon={faImages} />
						</div>
					)}
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
