import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Make Admin</h3>
                </div>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            style={{ maxWidth: '570px' }}
                            type="email"
                            placeholder="Enter Email" />
                    </Form.Group>

                    <Button
                        className="btn-jer"
                    >
                        Add as Admin
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;