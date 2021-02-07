import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const NavBar: React.FC = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Films</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">3 most popular films</Nav.Link>
                        <Nav.Link href="#link">All films</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
}
