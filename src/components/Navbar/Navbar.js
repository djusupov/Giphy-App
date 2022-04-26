import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css'

class Navbars extends Component {
    render() {
        return (
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand style={{fontSize: '30px'}} href="#home">JD Giphy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link style={{fontSize: '25px'}} href="#Reactions">Reactions</Nav.Link>
                                <Nav.Link style={{fontSize: '25px'}} href="#Entertainment">Entertainment</Nav.Link>
                                <Nav.Link style={{fontSize: '25px'}} href="#Sports">Sports</Nav.Link>
                                <Nav.Link style={{fontSize: '25px'}} href="#Stikers">Stikers</Nav.Link>
                                <Nav.Link style={{fontSize: '25px'}} href="#Artist">Artist</Nav.Link>
                                <NavDropdown style={{fontSize: '25px'}} title="More" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Button className="btn" variant="primary">Upload</Button>
                            <Button className="btn" style={{ margin: '20px', marginRight: '100px' }} variant="primary">Create</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default Navbars;