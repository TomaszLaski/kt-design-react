import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
	Button,
} from '@nextui-org/react';

const NavigationBar = () => {
	const location = useLocation();
	const isContactPage = location.pathname === '/contact';

	const links = [
		{ label: 'Portfolio', path: '/portfolio' },
		{ label: 'Contact', path: '/contact' },
	];

	const renderedLinks = links.map((link) => {
		return (
			<NavbarItem>
				<Link key={link.label} className='nav-link mr-4' to={link.path}>
					{link.label}
				</Link>
			</NavbarItem>
		);
	});
	return (
		<>
			<Navbar
				maxWidth={'full'}
				style={{ paddingLeft: '3rem', paddingRight: '1rem' }}
			>
				<NavbarBrand>
					<Link to='/'>
						<p className='brand'>VIZCO</p>
					</Link>
				</NavbarBrand>
				<NavbarContent justify=''>{renderedLinks}</NavbarContent>
			</Navbar>
			<Outlet />
		</>
	);
};

export default NavigationBar;
