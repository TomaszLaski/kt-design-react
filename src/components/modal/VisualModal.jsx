import React from 'react';
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

export default function VisualModal({ isOpen, onClose, images, folder }) {
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
	// console.log(images, 'images');
	// console.log(images[0].length, 'images length');

	return (
		<Modal isOpen={isOpen} onClose={onClose} backdrop='blur' size='3xl'>
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
											src={`src/assets/${folder.folder}/${images[0]}`}
											alt='Gallery image'
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
										/>
									) : (
										<Slider {...settings}>
											{images.map((image, index) => (
												<div key={index}>
													<Image
														src={`src/assets/${folder.folder}/${image}`}
														alt='Gallery image'
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
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								pulvinar risus non risus hendrerit venenatis. Pellentesque sit
								amet hendrerit risus, sed porttitor quam.
							</p>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
