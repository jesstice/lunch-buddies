import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import { editProfile } from '../../../../client/redux/modules/profile';
import Profile from './Profile';

class ProfileContainer extends Component {

  // editUserProfile = ({ profileEditsObject }) => {
  //   Meteor.call('users.editProfile', profileEditsObject);
  // }

  render() {
    return(
      <Profile
        updateEditStatus={editProfile}
        editStatus={this.props.editStatus}
        dispatch={this.props.dispatch}
        userData={this.props.userData}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    editStatus: state.profile.editProfile
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
  } }, ProfileContainer);

export default connect(mapStateToProps)(ExtendedProfileContainer);
