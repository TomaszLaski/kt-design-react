import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import './Contact.css';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBehance,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
	const [navbarHeight, setNavbarHeight] = useState(0);
	useEffect(() => {
		const navbar = document.getElementById('navbar');
		if (navbar) {
			const updateNavbarHeight = () => {
				const heightInPixels = navbar.offsetHeight;
				setNavbarHeight(heightInPixels);
			};

			const observer = new MutationObserver(updateNavbarHeight);

			observer.observe(navbar, {
				attributes: true,
				childList: true,
				subtree: true,
				attributeFilter: ['style', 'class'],
			});
			updateNavbarHeight();
			return () => {
				observer.disconnect();
			};
		}
	}, []);

	return (
		<Layout showIcons={false}>
			<div
				className='contactContainer'
				style={{ marginTop: `${navbarHeight}px` }}
			></div>
			<div className='contactAndFormContainer'>
				<div className='contactAndFormSection'>
					<div className='contact'>
						<h1 className='contactH1'>GIVE ME A SHOUT!</h1>
						<p style={{ marginTop: '2rem' }}>Phone: (+48) 514596199</p>
						<p style={{ marginTop: '2rem' }}>
							Email: klaudiatarkowska2@gmail.com
						</p>
						<p style={{ marginTop: '2rem', marginBottom: '2rem' }}>
							Social Media:
						</p>
						<div className='icon-container'>
							<a
								href='https://www.behance.net/klaudiatarkows1'
								className='icon'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon icon={faBehance} className='icon-color' />
							</a>
							<a
								href='https://www.instagram.com/vizco_studio/'
								className='icon'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon icon={faInstagram} className='icon-color' />
							</a>
							<a
								href='https://www.linkedin.com/in/klaudia-tarkowska-892502210/'
								className='icon'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon icon={faLinkedin} className='icon-color' />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='section'></div>
		</Layout>
	);
};

export default Contact;
