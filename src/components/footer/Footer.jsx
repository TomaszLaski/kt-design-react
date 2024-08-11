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

function Footer({ showIcons }) {
	return (
		<>
			<Navbar className='footer' bg='' variant='light'>
				<Container className={`custom-nav ${showIcons ? '' : 'centerCopyright'}`}>
					{' '}
					<Navbar.Brand
						href='#home'
						style={{ justifyContent: showIcons ? 'flex-start' : 'center' }}
					>
						<p
							className='copyright'
							style={{ textAlign: showIcons ? 'left' : 'center' }}
						>
							Copyright 2023 VIZCO
						</p>
					</Navbar.Brand>
					<Nav className='me-auto custom-nav-container'>
						{showIcons && (
							<>
								<Nav.Link
									href='https://www.behance.net/klaudiatarkows1'
									className='icon'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faBehance} />
								</Nav.Link>
								<Nav.Link
									href='https://www.instagram.com/vizco_studio/'
									className='icon'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faInstagram} />
								</Nav.Link>
								<Nav.Link
									href='https://www.linkedin.com/in/klaudia-tarkowska-892502210/'
									className='icon'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faLinkedin} />
								</Nav.Link>
							</>
						)}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Footer;
