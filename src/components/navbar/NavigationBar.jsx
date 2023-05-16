import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {

  const links = [
    { label: 'About', path: '/about' },
    { label: 'Animation', path: '/animation' },
    { label: 'Contact', path: '/contact' }
  ]

  const renderedLinks = links.map((link) => {
    return <Link key={link.label} className="nav-link mr-4" to={link.path}>
      <li className='nav-item'>{link.label}</li>
    </Link>
  });
  return (
    <>
      <Navbar collapseOnSelect expand='sm' bg='light' varian='light'>
        <Navbar.Toggle aria-controls='navbarScrool' data-bs-target='#navbarScrool' />
        <Link to='/'>
          <Navbar.Brand className='nav-item m-3 ms-auto'>KT</Navbar.Brand>
        </Link>
        <Navbar.Collapse id='navbarScroll' className='ms-auto'>
          <Nav className='ml-auto'>
            {renderedLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavigationBar;
