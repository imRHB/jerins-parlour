import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = (props) => {
    const { name, img, designation, company, comment } = props.testimonial;

    return (
        <Col>
            <Card className="p-5 border-0 rounded-3 testimonial-card">
                <div className="d-flex align-items-center">
                    <div>
                        <img src={img} alt="" style={{ width: '64px', height: '64px' }} className="mx-auto" />
                    </div>

                    <div className="ms-3">
                        <Card.Title><span className="fw-bold">{name}</span></Card.Title>

                        <Card.Text>
                            <span className="fw-bold">{designation}</span>, {company}
                        </Card.Text>
                    </div>
                </div>

                <Card.Body className="p-0">
                    <Card.Text className="my-4">
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Testimonial;