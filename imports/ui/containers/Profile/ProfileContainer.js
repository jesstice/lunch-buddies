import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Lunches } from '../../../api/lunches/index';
import { editProfile } from '../../../../client/redux/modules/profile';
import Profile from './Profile';

import Loader from '../../components/Loader/';

class ProfileContainer extends Component {

  // editUserProfile = ({ profileEditsObject }) => {
  //   Meteor.call('users.editProfile', profileEditsObject);
  // }

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
          currentUserId={this.props.match.params._id}
          lunchData={this.props.lunchData}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    editStatus: state.profile.editProfile
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