import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

import woman from '../../../images/img/beautiful-woman.png';

const Banner = () => {
    return (
        <div className="py-5 banner">
            <Container>
                <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-5">
                    <Col className="d-flex align-items-center">
                        <div>
                            <h1 className="fw-bold">BEAUTY SALON</h1>
                            <h1 className="fw-bold">FOR EVERY WOMEN</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore obcaecati illo veniam impedit omnis exercitationem quidem. Aspernatur, amet excepturi beatae assumenda mollitia eos commodi eum perspiciatis pariatur vero, ipsum alias!</p>

                            <Button variant="danger" className="btn-jer">Get an Appointment</Button>
                        </div>
                    </Col>

                    <Col>
                        <div className="d-flex justify-content-center">
                            <img src={woman} alt="" style={{ width: '484px', height: '478px' }} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;