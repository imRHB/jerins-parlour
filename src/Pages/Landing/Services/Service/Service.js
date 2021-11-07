import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, img, price, description } = props.service;

    return (
        <Col>
            <Card className="text-center p-5 border-0 rounded-3 service-card">
                <img src={img} alt="" style={{ width: '72px', height: '72px' }} className="mx-auto" />
                <Card.Body>
                    <Card.Title><span className="fw-bold">{name}</span></Card.Title>
                    <Card.Text>
                        <span className="fw-bold text-danger">${price}</span>
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;