import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


import './styles.css';


const Login = () => (
    <div className="page login">
        <div className="cardContainer">
            <Paper zDepth={5}>
                <div className="formContainer">
                    <form autoComplete="off" >
                        <div>
                            <TextField hintText="E-mail" type="email" label="Email" name="email" />
                        </div>
                        <div>
                            <TextField hintText="Password" type="password" label="Password" name="password"/>
                        </div>
                        <RaisedButton className="enterButton" primary fullWidth type="submit">
                            Enter
                        </RaisedButton>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
);

export default Login;