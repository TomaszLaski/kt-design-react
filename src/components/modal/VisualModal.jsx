import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Image,
} from '@nextui-org/react';

export default function VisualModal({ isOpen, onClose, image }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} backdrop='blur' size='large'>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>{image ? image.folder : 'No Image'}</ModalHeader>
						<ModalBody>
							{image && <Image src={image.main} alt='Gallery image' />}
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								pulvinar risus non risus hendrerit venenatis. Pellentesque sit
								amet hendrerit risus, sed porttitor quam.
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color='danger' variant='light' onPress={onClose}>
								Close
							</Button>
							<Button color='primary' onPress={onClose}>
								Action
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
