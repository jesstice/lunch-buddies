import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from 'grommet/components/LoginForm';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import FilterList from '../../containers/FilterList/';
import './styles.css';


const SignUp = ({ handleSignUp, handleEmail, handlePassword, handleFullname, handlePhone, userData }) => {

  const user = Meteor.userId();

  return (
    <div className="signup">
      <Paper zDepth={3}>
        <div className="cardContainer">
          <div className="formContainer">
            <form onSubmit={handleSignUp} autoComplete="off">
              <div>
                <TextField name="Name" hintText="What's your name?" fullWidth label="Name" onChange={handleFullname} />
              </div>
              <div>
                <TextField name="Phone" hintText="Phone number" fullWidth label="Phone" onChange={handlePhone} />
              </div>
                <div>
                  <div>
                    <TextField name="Email" hintText="Email" fullWidth type="email" label="Email" onChange={handleEmail} />
                  </div>
                  <div>
                    <TextField name="Password" hintText="Password" fullWidth type="password" label="Password" onChange={handlePassword} />
                  </div>
                </div>
              <div>
                <FilterList />
              </div>
                <div>
                  <RaisedButton className="enterButton" primary fullWidth type="submit">
                    Sign Up
                  </RaisedButton>
                  <Link to={'/login'} className="cancel">
                    <p>Cancel</p>
                  </Link>
                </div>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  )
};

export default SignUp;