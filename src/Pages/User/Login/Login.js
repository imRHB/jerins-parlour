import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Login = () => {
    const { signInWithGoogle } = useAuth();

    return (
        <div className="py-5 text-center login-area">
            <Container className="my-5">
                <div className="my-5">
                    <img src={logo} alt="logo" style={{ width: 'auto', height: '96px', padding: '4px' }} />
                </div>

                <div>
                    <h3 className="fw-bold">Login With</h3>

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
        </div>
    );
};

export default Login;