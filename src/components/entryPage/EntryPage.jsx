import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './EntryPage.css';

const EntryPage = () => {
	const [animateBackground, setAnimateBackground] = useState(false);

	const navigate = useNavigate();

	const handleClick = async (e) => {
		e.preventDefault();
		setAnimateBackground(true);

		setTimeout(() => {
			navigate('/about');
		}, 2000);
	};
	const onAnimationEnd = () => {
		setAnimateBackground(false);
	};


	return (

		<section id='entryPage'>
			<div className={`background-image${animateBackground ? ' zoom-animation' : ''}`} />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 title'>
						<h1 onClick={handleClick} className='Title'>Welcome to KT Design Studio</h1>
						<button
							type='button'
							className='btn btn-lg'
							onClick={handleClick}
						>
							Enter
						</button>
					</div>
					<div className='col-lg-6 button'>
					
					</div>
				</div>
			</div>
			<Outlet />
		</section>
	);
};

export default EntryPage;
