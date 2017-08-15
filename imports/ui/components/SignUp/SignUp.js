import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

SignUp.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleFullname: PropTypes.func.isRequired,
  handlePhone: PropTypes.func.isRequired,
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      emails: PropTypes.arrayOf(
        PropTypes.shape({
          address: PropTypes.string.isRequired
        })
      ),
      profile: PropTypes.shape({
        available: PropTypes.bool.isRequired,
        budget: PropTypes.arrayOf(PropTypes.string).isRequired,
        cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
        interests: PropTypes.arrayOf(PropTypes.string).isRequired,
        currentLunch: PropTypes.string,
        fullName: PropTypes.string.isRequired,
        pendingLunches: PropTypes.arrayOf(PropTypes.string).isRequired,
        phoneNumber: PropTypes.string.isRequired
      }).isRequired
    }))
};

export default SignUp;