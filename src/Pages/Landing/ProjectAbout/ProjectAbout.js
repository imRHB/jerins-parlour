import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ProjectAbout.css';

import spa from '../../../images/img/spa.png';

const ProjectAbout = () => {
    return (
        <div className="py-5 project-banner">
            <Container className="my-5 py-5">
                <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-5">
                    <Col>
                        <div>
                            <img src={spa} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </Col>

                    <Col className="d-flex align-items-center">
                        <div>
                            <h2 className="fw-bold">Let us handle your
                                <br />
                                screen <span className="text-danger">Professionally</span>.</h2>

                            <p className="my-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

                            <div className="d-flex align-items-center">
                                <div className="me-5">
                                    <p className="fs-1 fw-bold text-danger">500+</p>
                                    <p>Happy Customer</p>
                                </div>

                                <div>
                                    <p className="fs-1 fw-bold text-danger">16+</p>
                                    <p>Total Service</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectAbout;