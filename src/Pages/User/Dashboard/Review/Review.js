import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Review = () => {
    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Give Us Review</h3>
                </div>

                <Form>
                    <Row style={{ maxWidth: '570px' }}>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row style={{ maxWidth: '570px' }}>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" placeholder="Company Name" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row style={{ maxWidth: '570px' }}>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Designation" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row style={{ maxWidth: '570px' }}>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    placeholder="Enter Description" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="my-3 text-end">
                        <Button className="btn-jer">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Review;