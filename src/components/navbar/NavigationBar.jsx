import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavigationBar.css';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';

const NavigationBar = () => {
	const links = [
		{ label: 'Portfolio', path: '/portfolio' },
		{ label: 'Contact', path: '/contact' },
	];

	const renderedLinks = links.map((link) => {
		return (
			<NavbarItem>
				<Link
					key={link.label}
					className='nav-link mr-4 mobile-margin custom-link'
					to={link.path}
				>
					{' '}
					{link.label}
				</Link>
			</NavbarItem>
		);
	});
	return (
		<>
			<Navbar maxWidth={'full'} className='navbar'>
				<NavbarBrand>
					<Link to='/' className='custom-link'>
						<p className='brand custom-link'>VIZCO</p>
					</Link>
				</NavbarBrand>
				<NavbarContent justify=''>{renderedLinks}</NavbarContent>
			</Navbar>
			<Outlet />
		</>
	);
};

export default NavigationBar;
