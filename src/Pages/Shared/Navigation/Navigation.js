import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

import logo from '../../../images/logo.png';

const Navigation = () => {

    return (
        <Navbar>
            <Container className="d-inline">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={logo} alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />

                    <div className="d-flex">
                        <Nav className="">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/portfolio">Our Portfolio</NavLink>
                            <NavLink to="/team">Our Team</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Nav>

                        <button className="btn btn-jer">Login</button>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default Navigation;