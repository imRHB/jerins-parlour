import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

import woman from '../../../images/img/beautiful-woman.png';

const Banner = () => {
    return (
        <div className="py-5 banner">
            <Container>
                <Row className="g-5">
                    <Col className="d-flex align-items-center">
                        <div>
                            <h1 className="fw-bold">BEAUTY SALON</h1>
                            <h1 className="fw-bold">FOR EVERY WOMEN</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore obcaecati illo veniam impedit omnis exercitationem quidem. Aspernatur, amet excepturi beatae assumenda mollitia eos commodi eum perspiciatis pariatur vero, ipsum alias!</p>
                            <button className="btn btn-jer">Get an Appointment</button>
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