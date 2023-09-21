import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBehance,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './EntryPage.css';

const EntryPage = () => {
	const [animateBackground, setAnimateBackground] = useState(false);

	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		setAnimateBackground(true);

		setTimeout(() => {
			navigate('/portfolio');
		}, 500);
	};

	return (
		<section id='entryPage'>
			<div className='left-side'>
				<div
					className={`background-image${
						animateBackground ? ' zoom-animation' : ''
					}`}
				/>
			</div>
			<div className='right-side'>
				<div className='title'>
					<h1 onClick={handleClick} className='Title'>
						VIZCO
					</h1>
					<button type='button' className='btn' onClick={handleClick}>
						Enter
					</button>
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
