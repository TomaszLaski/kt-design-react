import React from 'react';
import Slider from 'react-slick';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Image,
	image,
} from '@nextui-org/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function VisualModal({ isOpen, onClose, images }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		vertical: false,
	};
	console.log(images, 'images');

	return (
		<Modal isOpen={isOpen} onClose={onClose} backdrop='blur' size='large'>
			<ModalContent style={{ overflow: 'hidden' }}>
				{(onClose) => (
					<>
						<ModalHeader>{images ? images[0].folder : 'No Images'}</ModalHeader>
						<ModalBody>
							<div className='slider-container'>
								{images && (
									<Slider {...settings}>
										<div>
											<Image src={images[0].main} alt='Gallery image' />
										</div>
										<div>
											<Image src={images[0].second} alt='Gallery image' />
										</div>
									</Slider>
								)}
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
