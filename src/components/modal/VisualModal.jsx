import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Image,
} from '@nextui-org/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VisualModal.css';

export default function VisualModal({ isOpen, onClose, images, folder }) {
	const [placement, setPlacement] = useState('center');

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 600) {
				setPlacement('top');
			} else {
				setPlacement('center');
			}
		};

		// Set initial placement
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		adaptiveHeight: true,
		centerMode: true,
		centerPadding: '0px',
		className: 'center',
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			backdrop='blur'
			size='3xl'
			className='modal-content-mobile '
			placement={placement}
		>
			<ModalContent style={{ overflow: 'hidden' }}>
				{(onClose) => (
					<>
						<ModalHeader>{images ? images[0].folder : 'No Images'}</ModalHeader>
						<ModalBody>
							<div
								className='slider-container'
								style={{ marginBottom: '1rem' }}
							>
								{images &&
									(images.length === 1 ? (
										<Image
											src={folder.images[0]}
											alt='Gallery image'
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												maxHeight: '80vh',
											}}
										/>
									) : (
										<Slider {...settings}>
											{images.map((image, index) => (
												<div key={index}>
													<Image
														src={image}
														alt={`Gallery image ${index + 1}`}
														style={{
															width: '100%',
															height: '100%',
															objectFit: 'contain',
															maxHeight: '80vh',
														}}
													/>
												</div>
											))}
										</Slider>
									))}
							</div>
							<p>{folder.description}</p>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
