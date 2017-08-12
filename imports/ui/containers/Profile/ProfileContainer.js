import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import { editProfile } from '../../../../client/redux/modules/profile';
import Profile from './Profile';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';

class ProfileContainer extends Component {

  editUserProfile = () => {
    const updateFullnameField = this.props.updateFullnameField;
    const updatePhoneField = this.props.updatePhoneField;
    const interestsFilters = this.props.interestsFilters;
    const cuisineFilters = this.props.cuisineFilters;
    const budgetFilters = this.props.budgetFilters;
    
    Meteor.call('users.editProfile', {
      updateFullnameField,
      updatePhoneField,
      interestsFilters,
      cuisineFilters,
      budgetFilters
    });
  }

  handleFullname = (name) => {
    this.props.dispatch(updateFullnameField(name));
  }

  handleBudget = (budget) => {
    this.props.dispatch(updateBudgetField(budget));
  }

  handleCuisines = (cuisines) => {
    this.props.dispatch(updateCuisinesField(cuisines));
  }

  handleInterests = (interests) => {
    this.props.dispatch(updateInterestsField(interests));
  }

  handlePhone = (phone) => {
    this.props.dispatch(updatePhoneField(phone));
  }


  render() {
    return (
      <Profile
        updateEditStatus={editProfile}
        editStatus={this.props.editStatus}
        dispatch={this.props.dispatch}
        userData={this.props.userData}

        editUserProfile={
          this.editUserProfile
        }

        handleFullname={
          this.handleFullname
        }

        handleBudget={
          this.handleBudget
        }

        handleCuisines={
          this.handleCuisines
        }

        handleInterests={
          this.handleInterests
        }

        handlePhone={
          this.handlePhone
        }
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    editStatus: state.profile.editProfile,
    updateFullnameField: state.forms.fullnameField,
    updatePhoneField: state.forms.phoneField,
    interestsFilters: state.filters.interestsFilters,
    cuisineFilters: state.filters.cuisineFilters,
    budgetFilters: state.filters.budgetFilters
  };
}

const ExtendedProfileContainer = createContainer(() => {
  const usersSub = Meteor.subscribe('users');

  let userData = null;
  !usersSub.ready() ? (users = null) : (userData = Meteor.users.find({ _id: Meteor.userId() }).fetch());
  const usersExists = !usersSub && !!users;
  return {
    userData,
    usersExists,
  }
}, ProfileContainer);

export default connect(mapStateToProps)(ExtendedProfileContainer);
