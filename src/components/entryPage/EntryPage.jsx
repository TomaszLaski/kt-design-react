import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBehance,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.jpg';

import './EntryPage.css';

const EntryPage = () => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		setTimeout(() => {
			navigate('/portfolio');
		}, 300);
	};

	return (
		<section id='entryPage'>
			<div className='left-side'>
				<img className={`background-image`} src={logo} />
			</div>
			<div className='right-side'>
				<div className='title'>
					<h1 onClick={handleClick} className='Title'>
						VIZCO
					</h1>
					<p className='btn' onClick={handleClick}>
						Enter
					</p>
					<div className='social-icons'>
						<a
							href='https://www.behance.net/klaudiatarkows1'
							className='icon'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faBehance} />
						</a>
						<a
							href='https://www.instagram.com/kt_studioo/'
							target='_blank'
							rel='noopener noreferrer'
							className='icon'
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href='https://www.linkedin.com/in/klaudia-tarkowska-892502210/'
							target='_blank'
							rel='noopener noreferrer'
							className='icon'
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
			</div>
			<Outlet />
		</section>
	);
};

export default EntryPage;
