import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
function Footer() {
    const [isContentEmpty, setIsContentEmpty] = useState(false);

    useEffect(() => {
        const isContentEmpty = checkIfContentIsEmpty();
        setIsContentEmpty(isContentEmpty);
        
        window.addEventListener('resize', handleContentChange);

        return () => {
            window.removeEventListener('resize', handleContentChange);
        };
    }, []);

    const handleContentChange = () => {
        const isContentEmpty = checkIfContentIsEmpty();
        setIsContentEmpty(isContentEmpty);
    };

    const checkIfContentIsEmpty = () => {
        return document.body.scrollHeight <= window.innerHeight;
    };
    return (
        <>
            <Navbar fixed={isContentEmpty ? 'bottom' : ''} bg="light" variant="light">
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

export default Footer;
