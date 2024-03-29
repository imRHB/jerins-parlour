import React, { useState } from 'react';
import { Alert, Button, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, signInWithGoogle, loginUser, loading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        e.preventDefault();

        loginUser(loginData.email, loginData.password);
    };

    return (
        <div className="py-5 text-center login-area">
            <div className="text-center">
                {
                    user?.email && <Alert variant="success}">
                        Logged in successfully with {user.email}.
                    </Alert>
                }

                {
                    authError && <Alert variant="danger}">
                        {authError}
                    </Alert>
                }
            </div>

            {
                !loading && <Container className="my-5">
                    <div className="my-5">
                        <img src={logo} alt="logo" style={{ width: 'auto', height: '96px', padding: '4px' }} />
                    </div>

                    <div className="" style={{ maxWidth: '520px', margin: '0 auto' }}>
                        <Form onSubmit={handleLogin} className="mx-auto">
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
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="password"
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder="Password" />
                            </FloatingLabel>

                            <div className="d-grid gap-2">
                                <Button
                                    className="btn-jer"
                                    type="submit"
                                    variant="secondary"
                                    size="lg">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>

                    <div className="my-4">
                        <p>or</p>

                        <Button
                            onClick={signInWithGoogle}
                            className="my-3 login-btn"
                        ><span
                            className="me-4 social-icon"
                        >{googleIcon}
                            </span> Continue with Google</Button>

                        <p>Don't have an account? <Link
                            to="/register"
                            className="user-toggle">
                            Create an account
                        </Link>
                        </p>
                    </div>
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
        </div>
    );
};

export default Login;