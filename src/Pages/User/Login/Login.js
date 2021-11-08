import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useFirebase from '../../../hooks/useFirebase';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

const Login = () => {
    const { signInWithGoogle } = useFirebase();

    return (
        <div className="my-5 text-center login-area">
            <Container>
                <div className="my-5">
                    <img src={logo} alt="logo" style={{ width: 'auto', height: '96px', padding: '4px' }} />
                </div>

                <div>
                    <h3 className="fw-bold">Login With</h3>
                    <button onClick={signInWithGoogle} className="btn my-3 login-btn"><span className="text-secondary me-4">{googleIcon}</span> Continue with Google</button>
                    <p>Don't have an account? <Link to="/register">
                        Create an account
                    </Link>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Login;