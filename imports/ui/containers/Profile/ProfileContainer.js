import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
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
import { acceptInvite, declineInvite } from '../../../../client/redux/modules/invites';
import InvitationModalContainer from '../InvitationModal/';
import Loader from '../../components/Loader/';

class ProfileContainer extends Component {

  // Edit profile methods
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
    user = this.props.currentUser;
    const lunchId = this.props.myLunchId;

    Meteor.call('users.acceptInvite', {user, lunchId})
  }

  declineLunchInvite = () => {
    const lunchId = this.props.myLunchId;

    Meteor.call('users.removeInvite', lunchId)
  }

  clickAcceptButton = (lunchId) => {
    this.props.dispatch(acceptInvite(lunchId));
    this.updateAvailabilityStatus();
  }

  clickDeclineButton = (lunchId) => {
    this.props.dispatch(declineInvite(lunchId));
  }

  updateAvailabilityStatus = () => {
    available = !this.props.currentUser.profile.available;

    Meteor.call('users.setAvailableStatus', available);
  }

  render() {
    const loading = this.props.loadingLunch && this.props.loadingUsers;
    const { currentUser, match } = this.props;
    let userProfileData;
    let filteredLunchData;
    const today = moment().format('YYYYMMDDHH');

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
        <span>
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
            handleLunch={this.handleLunch}

            lunchData={filteredLunchData}
            currentUserId={match.params._id}
            acceptButton={this.clickAcceptButton}
            declineButton={this.clickDeclineButton}
            availabilityStatus={this.updateAvailabilityStatus}
            today={today}
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
    myLunchId: state.invites.lunchId,
    acceptInvite: state.invites.accept,
    declineInvite: state.invites.decline,
    showLunch: state.lunch.showLunchInvitation
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

ProfileContainer.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  lunchData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      buddies: PropTypes.arrayOf(
        PropTypes.arrayOf(
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
          })
        )
      ),
      budget: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired,
      createdOn: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(
        PropTypes.string
      ),
      due: PropTypes.string.isRequired
    })
  ),
  updateEditStatus: PropTypes.func,
  acceptButton: PropTypes.func,
  declineButton: PropTypes.func,
  availabilityStatus: PropTypes.func,
  editStatus: PropTypes.bool,
  dispatch: PropTypes.func,
  editUserProfile: PropTypes.func,
  handleFullname: PropTypes.func,
  handleBudget: PropTypes.func,
  handleCuisines: PropTypes.func,
  handleInterests: PropTypes.func,
  handlePhone: PropTypes.func,
  handleLunch: PropTypes.func,
  currentUserId: PropTypes.string,
  today: PropTypes.string
};

export default connect(mapStateToProps)(ExtendedProfileContainer);