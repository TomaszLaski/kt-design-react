import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
function Footer() {
    return (
        <>
            <Navbar bg="light" fixed="bottom" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Copyright 2023 KT</Navbar.Brand>
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

export default Footer
