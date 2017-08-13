import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Lunches } from '../../../api/lunches/index';
import { editProfile } from '../../../../client/redux/modules/profile';
import Profile from './Profile';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';

import Loader from '../../components/Loader/';

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
    const loading = this.props.loadingLunch && this.props.loadingUsers;
      
    if (loading) {
      return(
        <Loader />
      )
    } else { 
      return (
        <Profile
          updateEditStatus={editProfile}
          editStatus={this.props.editStatus}
          dispatch={this.props.dispatch}
          userData={this.props.userData}
          lunchData={this.props.lunchData}
          currentUserId={this.props.match.params._id}
        
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

let pendingIds = ['ZPGdi8WgN9rcfhATr', 'hmjDyDz2BhbaiNYoc'];

const ExtendedProfileContainer = createContainer(({ match }) => {
  const usersSub = Meteor.subscribe('users');
  const loadingUsers = !usersSub.ready();
  const userData = Meteor.users.find({ _id: match.params._id }).fetch();

  const lunchSub = Meteor.subscribe('lunches');
  const loadingLunch = !lunchSub.ready();
  const lunchData = Lunches.find({ tempId: { $in: pendingIds } }).fetch();

  return {
    userData,
    loadingUsers,
    lunchData,
    loadingLunch,
  } }, ProfileContainer);

export default connect(mapStateToProps)(ExtendedProfileContainer);