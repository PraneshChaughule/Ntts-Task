import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <>
                <Navbar className='navBar'>
                    <Container>
                        <Navbar.Brand href="/">Moskva Furniture</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}

export default NavBar
