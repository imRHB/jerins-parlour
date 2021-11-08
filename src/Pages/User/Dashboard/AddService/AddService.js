import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddService = () => {
    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Add Service</h3>
                </div>

                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Service Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="Insert Image URL" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    placeholder="Enter Description" />
                            </Form.Group>
                        </Col>

                        <Col>
                            {/* some space */}
                        </Col>
                    </Row>

                    <div className="my-3 text-end">
                        <Button className="btn-jer">
                            Add Service
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default AddService;