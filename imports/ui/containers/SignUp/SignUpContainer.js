import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accounts } from 'meteor/accounts-base';
import SignUp from '../../components/SignUp/';
import { 
  updateEmailField, 
  updatePasswordField, 
  updateFullnameField, 
  updateBudgetField, 
  updateCuisinesField,
  updateInterestsField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';

class SignUpContainer extends Component {

  handleSignUp = () => {
    const email = this.props.updateEmailField,
          password = this.props.updatePasswordField,
          fullName = this.props.updateFullnameField,
          budget = this.props.updateBudgetField,
          cuisines = this.props.updateCuisinesField,
          interests = this.props.updateInterestsField,
          phoneNumber = this.props.updatePhoneField

    Accounts.createUser({ 
      email, 
      password, 
      fullName, 
      budget, 
      cuisines, 
      interests, 
      phoneNumber 
    }, (error) => {
      if (error) {
        console.log("There was an error: " + error.reason);
      } else { 
        this.props.history.push('/')
      };
    })
  }

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event.target.value));
  }

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event.target.value));
  }

  handleFullname = (event) => {
    this.props.dispatch(updateFullnameField(event.target.value));
  }

  handleBudget = (event) => {
    this.props.dispatch(updateBudgetField(event.target.value));
  }

  handleCuisines = (event) => {
    this.props.dispatch(updateCuisinesField(event.target.value));
  }

  handleInterests = (event) => {
    this.props.dispatch(updateInterestsField(event.target.value));
  }

  handlePhone = (event) => {
    this.props.dispatch(updatePhoneField(event.target.value));
  }

  
  render () {
    return (
      <div>
        <SignUp 

        handleSignup={(e) => {
          e.preventDefault();
          this.handleSignUp({ 
            email: this.props.updateEmailField,
            password: this.props.updatePasswordField,
            fullName: this.props.updateFullnameField,
            budget: this.props.updateBudgetField,
            cuisines: this.props.updateCuisinesField,
            interests: this.props.updateCuisinesField,
            phoneNumber: this.props.updatePhoneField
          });
        }}
        
        handleEmail={(e) => {
          this.handleEmail(e);
        }}

        handlePassword={(e) => {
          this.handlePassword(e);
        }}

        handleFullname={(e) => {
          this.handleFullname(e);
        }}

        handleBudget={(e) => {
          this.handleBudget(e);
        }}

        handleCuisines={(e) => {
          this.handleCuisines(e);
        }}

        handleInterests={(e) => {
          this.handleInterests(e);
        }}

        handlePhone={(e) => {
          this.handlePhone(e);
        }}
        />
      </div>
    )
  }
}

export default SignUpContainer;