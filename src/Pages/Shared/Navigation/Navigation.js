import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

import logo from '../../../images/logo.png';


const Navigation = () => {
    const { user, logout } = useAuth();

    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };

    return (
        <>
            {/* <Navbar>
                <Container className="d-inline">
                    <div className="d-flex align-items-center justify-content-between">
                        <img src={logo} alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />

                        <div className="d-flex">
                            <Nav className="">
                                <NavLink to="/home">Home</NavLink>
                                <NavLink to="/services">Services</NavLink>
                                <NavLink to="/team">Our Team</NavLink>
                                <NavLink to="/contact">Contact Us</NavLink>
                                {
                                    user?.email && <NavLink to="/dashboard">Dashboard</NavLink>
                                }
                            </Nav>

                            {
                                user?.email ? <Button
                                    onClick={logout}
                                    variant="danger" className="ms-2 btn-jer">Logout</Button>
                                    :
                                    <Button
                                        onClick={handleLogin} variant="danger" className="ms-2 btn-jer"
                                    >Login</Button>
                            }
                        </div>
                    </div>
                </Container>
            </Navbar> */}

            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <img src={logo} alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />
                        <Nav className="me-auto">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/team">Our Team</NavLink>
                            <NavLink to="/contact">Contact Us</NavLink>
                            {
                                user?.email && <NavLink to="/dashboard">Dashboard</NavLink>
                            }
                        </Nav>
                        <Nav>
                            {
                                user?.email ? <Button
                                    onClick={logout}
                                    variant="danger" className="ms-2 btn-jer">Logout</Button>
                                    :
                                    <Button
                                        onClick={handleLogin} variant="danger" className="ms-2 btn-jer"
                                    >Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
