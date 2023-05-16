import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './EntryPage.css';
import dom from '../../assets/dom.jpg';

const EntryPage = () => {
	return (
		<section id='entryPage'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 entry-page'>
						<p className='logo'>Logo</p>
						<h1>KT Studio</h1>
						<Link to='/about'>
							<button type='button' className='btn btn-lg btn-outline-dark'>
								Enter
							</button>
						</Link>
					</div>
					<div className='col-lg-6 entry-page'>
						<img src={dom} className='entryImg' />
					</div>
				</div>
			</div>
			<Outlet />
		</section>
	);
};

export default EntryPage;
