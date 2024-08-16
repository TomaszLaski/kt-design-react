import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Image,
	Button,
} from '@nextui-org/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VisualModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={`${className} sample-arrow`} onClick={onClick}>
			<FontAwesomeIcon icon={faAngleRight} className='sample-arrow-right' />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={`${className} sample-arrow`} onClick={onClick}>
			<FontAwesomeIcon icon={faAngleLeft} className='sample-arrow-left' />
		</div>
	);
}

export default function VisualModal({ isOpen, onClose, images, folder }) {
	const [placement, setPlacement] = useState('center');
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleImageClick = (imageUrl) => {
		window.open(imageUrl, '_blank');
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 600) {
				setPlacement('top');
			} else {
				setPlacement('center');
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);
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
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		afterChange: (current) => setCurrentImageIndex(current),
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			backdrop='blur'
			size='3xl'
			className='modal-content-mobile'
			placement={placement}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>{images ? images[0].folder : 'No Images'}</ModalHeader>
						<ModalBody className='nextui-modal-body'>
							<div className='slider-container'>
								{images &&
									(images.length === 1 ? (
										<div className='image-container'>
											<Image
												src={folder.images[0]}
												alt='Gallery image'
												className='image-style'
											/>
										</div>
									) : (
										<Slider {...settings}>
											{images.map((image, index) => (
												<div key={index} className='image-container'>
													<Image
														src={image}
														alt={`Gallery image ${index + 1}`}
														className='slider-image-style'
													/>
												</div>
											))}
										</Slider>
									))}
							</div>
							<div className='button-container'>
								<Button
									color='default'
									onClick={() => handleImageClick(images[currentImageIndex])}
								>
									Open in new tab
								</Button>
							</div>
							<p>{folder.description}</p>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
