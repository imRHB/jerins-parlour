import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Registration.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Registration = () => {
    const { signInWithGoogle } = useFirebase();

    return (
        <div className="py-5 reg-area">
            <Container className="form-container">
                <h3 className="my-4">Create an account</h3>

                <Form className="mx-auto">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="First Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Last Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email Address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="Email Address" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword" label="Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Confirm Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </FloatingLabel>

                    <div className="d-grid gap-2">
                        <Button
                            className="btn-jer"
                            type="submit"
                            variant="secondary"
                            size="lg">
                            Create an account
                        </Button>
                    </div>

                    <div className="text-center my-3">
                        <p>Already have an account? <Link
                            to="/login"
                            className="user-toggle">
                            Login
                        </Link>
                        </p>
                    </div>
                </Form>
            </Container>

            <Container
                className="text-center my-5 form-container-ext"
            >
                <div className="">
                    <p>- or -</p>
                </div>
                <Button
                    onClick={signInWithGoogle}
                    className="my-2 login-btn"
                ><span
                    className="me-4 social-icon"
                >{googleIcon}
                    </span> Continue with Google</Button>
            </Container>
        </div>
    );
};

export default Registration;