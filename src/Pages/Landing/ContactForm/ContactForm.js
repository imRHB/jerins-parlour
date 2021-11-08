import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {

    return (
        <div className="py-5 form-area">
            <Container className="py-5">
                <h2 className="fw-bold text-center">Let us handle your
                    <br />
                    project, professionally.</h2>

                <Form className="mx-auto my-5 text-center contact-form">
                    <Row className="mb-0">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-0">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label></Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                    </Form.Group>

                    <Button variant="danger btn-jer" className="mt-3">
                        Send Message
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default ContactForm;