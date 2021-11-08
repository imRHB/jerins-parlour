import { faFacebookSquare, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

const Footer = () => {

    return (
        <div className="py-5 footer-area">
            <Container>
                <Row className="g-4">
                    <Col>
                        <h3 className="fw-bold text-light">JERIN'S PARLOUR</h3>
                        <div className="d-flex align-items-center">
                            <div>
                                <p className="fs-4">{map}</p>
                            </div>

                            <div className="ms-3">
                                <p>H#000 (o<sup>th</sup> Floor), Road #00.
                                    <br />
                                    New DOHS, Dhanmondi,
                                    Dhaka, Bangaldesh
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h5 className="fw-bold">Company</h5>
                            <Nav className="flex-column">
                                <Link to="#">About</Link>
                                <Link to="#">Project</Link>
                                <Link to="#">Our Team</Link>
                                <Link to="#">Terms Conditions</Link>
                                <Link to="#">Submit Listing</Link>
                            </Nav>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h5 className="fw-bold">Quick Links</h5>
                            <Nav className="flex-column">
                                <Link to="#">Quick Links</Link>
                                <Link to="#">Rentals</Link>
                                <Link to="#">Sales</Link>
                                <Link to="#">Contact</Link>
                                <Link to="#">Our Blog</Link>
                            </Nav>
                        </div>
                    </Col>

                    <Col>
                        <h5 className="fw-bold">About Us</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur in sequi odit ab dignissimos impedit delectus repudiandae accusantium, optio laudantium.</p>

                        <Nav className="">
                            <Nav.Item>
                                <Nav.Link href="https://www.facebook.com/" target="_blank">{facebook}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.instagram.com/" target="_blank">{instagram}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.linkedin.com/" target="_blank">{linkedin}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.youtube.com/" target="_blank">{youtube}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <div className="my-4 text-center">
                    <p className="text-light"><small>Copyright 2021, Jerin's Parlour</small></p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;