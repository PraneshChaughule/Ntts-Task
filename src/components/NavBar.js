import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const history = useHistory();
    const handleLogout=()=>{
        localStorage.clear();
        history.push('/');
    }
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
                        <Nav>
                            <button onClick={handleLogout} className='logoutbtn'>Logout</button>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}

export default NavBar
