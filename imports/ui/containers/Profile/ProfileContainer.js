import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import { editProfile } from '../../../../client/redux/modules/profile';
import Profile from './Profile';

import Loader from '../../components/Loader/';

class ProfileContainer extends Component {

  // editUserProfile = ({ profileEditsObject }) => {
  //   Meteor.call('users.editProfile', profileEditsObject);
  // }

  render() {
    if (this.props.userData) {
      return(
        <Profile
          updateEditStatus={editProfile}
          editStatus={this.props.editStatus}
          dispatch={this.props.dispatch}
          userData={this.props.userData}
          currentUserId={this.props.match.params._id}
        />
      )
    } else {
      return (
        <Loader />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    editStatus: state.profile.editProfile
  };
}

const ExtendedProfileContainer = createContainer(({ match }) => {
  const usersSub = Meteor.subscribe('users');

  let userData = null;
  !usersSub.ready() ? (users = null) : (userData = Meteor.users.find({ _id: match.params._id }).fetch());
  const usersExists = !usersSub && !!users;
  return {
    userData,
    usersExists,
  } }, ProfileContainer);

export default connect(mapStateToProps)(ExtendedProfileContainer);
