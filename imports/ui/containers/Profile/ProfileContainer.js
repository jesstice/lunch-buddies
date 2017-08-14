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
import { acceptInvite, declineInvite } from '../../../../client/redux/modules/invites';
import Loader from '../../components/Loader/';

class ProfileContainer extends Component {

  // Edit profile methods
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

  // Accept and decline invite methods
  addNamesToLunch = (pendingLunches) => {
    userData = this.props.userData;

    updatedPendingLunches = pendingLunches.map(lunch => {
      lunch.buddies = lunch.buddies.map((buddy) => {
        buddy = userData.filter(user => user._id === buddy)
        return buddy;
      });
      return lunch;
    });
    return updatedPendingLunches;
  }

  filterLunchData = (user) => {
    pendingIds = user.profile.pendingLunches;
    pendingLunches = this.props.lunchData;

    pendingLunches = pendingLunches.filter((lunch) => pendingIds.find(id => lunch._id === id));
    pendingLunches = this.addNamesToLunch(pendingLunches);
    return pendingLunches;
  }

  acceptLunchInvite = () => {
    user = Meteor.user();
    const lunchId = this.props.myLunchId;

    Meteor.call('users.acceptInvite', {user, lunchId})
  }

  declineLunchInvite = () => {
    const lunchId = this.props.myLunchId;

    Meteor.call('users.removeInvite', lunchId)
  }

  clickAcceptButton = (lunchId) => {
    this.props.dispatch(acceptInvite(lunchId));
  }

  clickDeclineButton = (lunchId) => {
    this.props.dispatch(declineInvite(lunchId));
  }

  render() {
    const loading = this.props.loadingLunch && this.props.loadingUsers;
    const { currentUser, match } = this.props;
    let userProfileData;
    let filteredLunchData;

    if (!loading) {
      filteredLunchData = this.filterLunchData(currentUser);
      userProfileData  = this.props.userData.filter(user => user._id === match.params._id);
    }

    if (this.props.acceptInvite && this.props.myLunchId) {
      this.acceptLunchInvite();
    }

    if (this.props.declineInvite && this.props.myLunchId) {
      this.declineLunchInvite();
    }

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
          userData={userProfileData}

          editUserProfile={this.editUserProfile}
          handleFullname={this.handleFullname}
          handleBudget={this.handleBudget}
          handleCuisines={this.handleCuisines}
          handleInterests={this.handleInterests}
          handlePhone={this.handlePhone}

          lunchData={filteredLunchData}
          currentUserId={match.params._id}
          acceptButton={this.clickAcceptButton}
          declineButton={this.clickDeclineButton}
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
    budgetFilters: state.filters.budgetFilters,
    myLunchId: state.invites.lunchId,
    acceptInvite: state.invites.accept,
    declineInvite: state.invites.decline
  };
}

const ExtendedProfileContainer = createContainer(() => {
  const usersSub = Meteor.subscribe('users');
  const loadingUsers = !usersSub.ready();
  const userData = Meteor.users.find().fetch();

  const lunchSub = Meteor.subscribe('lunches');
  const loadingLunch = !lunchSub.ready();
  const lunchData = Lunches.find().fetch();

  return {
    currentUser: Meteor.user(),
    userData,
    loadingUsers,
    lunchData,
    loadingLunch,
  } }, ProfileContainer);

export default connect(mapStateToProps)(ExtendedProfileContainer);