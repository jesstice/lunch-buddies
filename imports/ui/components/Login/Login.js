import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './styles.css';


const Login = ({ handleLogin, handleEmail, handlePassword, emailError, passwordError, showEmailError, showPasswordError }) => (
    <div className="page login">
        <div className="cardContainer">
            <Paper zDepth={3}>
                <div className="formContainer">
                    <form onSubmit={handleLogin} autoComplete="off">
                        <div>
                            <TextField
                                hintText="E-mail"
                                type="email"
                                label="Email"
                                name="email"
                                errorText={emailError}
                                onChange={handleEmail}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Password"
                                type="password"
                                label="Password"
                                name="password"
                                errorText={passwordError}
                                onChange={handlePassword}
                            />
                        </div>
                        <RaisedButton className="loginButton" primary fullWidth type="submit">
                            Login
                        </RaisedButton>
                        <Link to={'/signup'}>
                            <RaisedButton className="signUpButton" primary fullWidth>
                                Sign Up
                            </RaisedButton>
                        </Link>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
);

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleEmail: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired
};

export default Login;