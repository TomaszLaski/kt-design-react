import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';

const NavigationBar = () => {
	const location = useLocation();
	const isContactPage = location.pathname === '/contact';

	const links = [
		{ label: 'Portfolio', path: '/portfolio' },
		{ label: 'Contact', path: '/contact' },
	];

	const renderedLinks = links.map((link) => {
		return (
			<Link key={link.label} className='nav-link mr-4' to={link.path}>
				<li
					className={`navbar-item ${
						isContactPage ? 'navbar-item-contact' : ''
					}`}
				>
					{link.label}
				</li>
			</Link>
		);
	});
	return (
		<>
			<Navbar
				className={`navbar-inner ${isContactPage ? 'navbar-contact' : ''}`}
				collapseOnSelect
				expand='sm'
				id='navbar'
			>
				<Navbar.Toggle
					aria-controls='navbarScrool'
					data-bs-target='#navbarScrool'
				/>
				<Link to='/'>
					<Navbar.Brand className='logo nav-item m-3 ms-auto'>
						<p className='brand'>VIZCO</p>
					</Navbar.Brand>
				</Link>
				<Navbar.Collapse id='navbarScroll' className='ms-auto'>
					<Nav className='ml-auto'>{renderedLinks}</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Outlet />
		</>
	);
};

export default NavigationBar;
