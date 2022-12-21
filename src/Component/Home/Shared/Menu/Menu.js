import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hook/useFirebase';
import BreakfastMenu from '../../../Meals/Breakfast/BreakfastMenu';
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <Navbar bg="light" >
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="breakfast" >Breakfast</Nav.Link>
                            <Nav.Link as={Link} to="Lunch" >Lunch</Nav.Link>
                            <Nav.Link as={Link} to="Dinner">Dinner</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;