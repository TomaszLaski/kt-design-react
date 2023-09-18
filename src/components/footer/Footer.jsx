import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBehance,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
	return (
		<>
			<Navbar className='footer' bg='' variant='light'>
				<Container>
					<Navbar.Brand href='#home'>
						<p className='copyright'>Copyright 2023 KT</p>
					</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link
							href='https://www.behance.net/klaudiatarkows1'
							className='icon'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faBehance} />
						</Nav.Link>
						<Nav.Link
							href='https://www.instagram.com/kt_studioo/'
							className='icon'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faInstagram} />
						</Nav.Link>{' '}
						<Nav.Link
							href='https://www.linkedin.com/in/klaudia-tarkowska-892502210/'
							className='icon'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Footer;
