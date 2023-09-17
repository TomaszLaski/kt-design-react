import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

function Footer() {
    return (
        <>
            <Navbar className='footer' bg = '' variant="light">
                <Container>

                    <Navbar.Brand href="#home"><p className='copyright'>Copyright 2023 KT</p></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><AiFillFacebook /></Nav.Link>
                        <Nav.Link href="#features"><AiFillInstagram /></Nav.Link>
                        <Nav.Link href="#pricing">Email</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer;
