import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Lunches } from '../../../api/lunches/index';
import MyInvites from './MyInvites';
import Loader from '../../components/Loader/';
import { acceptInvite, declineInvite } from '../../../../client/redux/modules/invites';

class MyInvitesContainer extends Component {

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

    Meteor.call('users.setAvailableStatus', available, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        return <Redirect to={'/'} />;
      }
    });
  }

  render() {
    const loading = this.props.loadingLunch && this.props.loadingUsers;
    const { currentUser } = this.props;
    let filteredLunchData;
    
    if (!loading) {
      filteredLunchData = this.filterLunchData(currentUser);;
    }

    if (this.props.acceptInvite && this.props.myLunchId) {
      this.acceptLunchInvite();
    }

    if (this.props.declineInvite && this.props.myLunchId) {
      this.declineLunchInvite();
    }

    return (
      <MyInvites
        openStatus={this.props.openStatus}
        userData={currentUser}
        lunchData={filteredLunchData}
        loading={loading}
        acceptButton={this.clickAcceptButton}
        declineButton={this.clickDeclineButton}
        availabilityStatus={this.updateAvailabilityStatus}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    openStatus: state.invites.showInvites,
    myLunchId: state.invites.lunchId,
    acceptInvite: state.invites.accept,
    declineInvite: state.invites.decline
  };
}


const ExtendedMyInvitesContainer = createContainer(() => {
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
  } }, MyInvitesContainer);

export default connect(mapStateToProps)(ExtendedMyInvitesContainer);