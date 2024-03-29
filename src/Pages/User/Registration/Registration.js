import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';
import './Registration.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Registration = () => {
    const [loginData, setLoginData] = useState({});

    const { user, authError, signInWithGoogle, registerUser, loading } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleRegistration = e => {
        e.preventDefault();

        if (loginData.password !== loginData.confirmPassword) {
            alert('Password not matched');
            return;
        }

        registerUser(loginData.email, loginData.password);

    };

    return (
        <div className="py-5 reg-area">
            <div className="text-center">
                {
                    user?.email && <Alert variant="success}">
                        Congratulations! New account created successfully!
                    </Alert>
                }

                {
                    authError && <Alert variant="danger}">
                        {authError}
                    </Alert>
                }
            </div>

            {
                !loading && <Container className="py-4 form-container">
                    <h3 className="my-4">Create an account</h3>

                    <Form
                        onSubmit={handleRegistration}
                        className="mx-auto">
                        {/* 
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
                     */}

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email Address"
                            className="mb-3"
                        >
                            <Form.Control
                                name="email"
                                onChange={handleOnChange}
                                type="email"
                                placeholder="Email Address" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword" label="Password"
                            className="mb-3"
                        >
                            <Form.Control
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                placeholder="Password" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingConfirmPassword"
                            label="Confirm Password"
                            className="mb-3"
                        >
                            <Form.Control
                                name="confirmPassword"
                                onChange={handleOnChange}
                                type="password"
                                placeholder="Confirm Password" />
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
            }

            <div className="text-center">
                {
                    loading && <div style={{ minHeight: '50vh' }}>
                        <Spinner
                            animation="border"
                            variant="warning"
                        />
                    </div>
                }
            </div>

            {
                !loading && <Container
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
            }
        </div>
    );
};

export default Registration;