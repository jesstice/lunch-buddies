import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import { updateEmailField, updatePasswordField, showEmailError, showPasswordError } from '../../../../client/redux/modules/forms';

class LoginContainer extends Component {

  handleLogin = ({ updateEmailField, updatePasswordField, showEmailError, showPasswordError, dispatch }) => {

    const email = this.props.updateEmailField,
          password = this.props.updatePasswordField,
          emailError = this.props.emailError,
          passwordError = this.props.passwordError

    // TO DO: Add login error messages
    // if (!email) {
    //   this.props.dispatch(showEmailError('This field is required'));
    // } else {
    //   this.props.dispatch(showEmailError(''));
    // }

    // if (!password) {
    //   this.props.dispatch(showPasswordError('This field is required'));
    // } else {
    //   this.props.dispatch(showPasswordError(''));
    // }

    if (email && password) {
      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          console.log("There was an error:" + error.reason);
        } else {
          this.props.history.push('/')
        }
      });
    }
  }

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event.target.value));
  }

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event.target.value));
  }



  render() {

    return (
      <div>
        <Login 

        handleEmail={(e) => {
          this.handleEmail(e);
        }}

        handlePassword={(e) => {
          this.handlePassword(e);
        }}
        
        handleLogin={(e) => {
           e.preventDefault(); 
          this.handleLogin({ email: this.props.updateEmailField, password: this.props.updatePasswordField, emailError: this.props.emailError, passwordError: this.props.passwordError });
        }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    updateEmailField: state.forms.emailField,
    updatePasswordField: state.forms.passwordField,
    emailError: state.forms.emailError,
    passwordError: state.forms.passwordError
});

export default withRouter(connect(mapStateToProps)(LoginContainer));