import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Lunches } from '../../../api/lunches/index';
import { editProfile } from '../../../../client/redux/modules/profile';
import { flipCreateLunchModal } from '../../../../client/redux/modules/lunch';
import Profile from './Profile';
import { wipeFilterState } from '../../../../client/redux/modules/filters';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';
import InvitationModalContainer from '../InvitationModal/';
import Loader from '../../components/Loader/';

class ProfileContainer extends Component {

  editUserProfile = () => {
    const fullName = this.props.updateFullnameField;
    const phoneNumber = this.props.updatePhoneField;
    const interests = this.props.interestsFilters;
    const cuisines = this.props.cuisineFilters;
    const budget = this.props.budgetFilters;

    Meteor.call('users.editProfile', {
      fullName,
      phoneNumber,
      interests,
      cuisines,
      budget
    }, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        this.props.dispatch(wipeFilterState());
        this.props.dispatch(editProfile());
      }
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
  handleLunch = (invitee_id, fullName) => {
    this.props.dispatch(flipCreateLunchModal({invitee_id, fullName}));
  }

  render() {
    const loading = this.props.loadingLunch && this.props.loadingUsers;
      
    if (loading) {
      return(
        <Loader />
      )
    } else { 
      return (
        <span>
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
          handleLunch={
            this.handleLunch
          }
        />
        <InvitationModalContainer />
        </span>
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
    showLunch: state.lunch.showLunchInvitation
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