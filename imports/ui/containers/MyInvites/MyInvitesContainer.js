import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Lunches } from '../../../api/lunches/index';
import MyInvites from './MyInvites';
import Loader from '../../components/Loader/';

class MyInvitesContainer extends Component {

  filterLunchData = (user) => {
    pendingIds = user.profile.pendingLunches;
    pendingLunches = this.props.lunchData;

    pendingLunches = pendingLunches.filter((lunch) => pendingIds.find(id => lunch._id === id));
    return pendingLunches;
  }

  acceptInvite = (user, lunchId) => {
    Meteor.call('users.acceptInvite', {user, lunchId})
  }

  render() {
    const loading = this.props.loadingLunch && this.props.loadingUsers;
    const { currentUser } = this.props;
    let filteredLunchData;
    // filteredLunchData = this.filterLunchData(currentUser);
    
    if (!loading) {
      filteredLunchData = this.filterLunchData(currentUser);
      console.log(filteredLunchData);
    }

    return (
      <MyInvites
        openStatus={this.props.openStatus}
        userData={currentUser}
        lunchData={filteredLunchData}
        loading={loading}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    openStatus: state.invites.showInvites
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