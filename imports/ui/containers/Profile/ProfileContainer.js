import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import { editProfile } from '../../../../client/redux/modules/profile';
import Profile from './Profile';

class ProfileContainer extends Component {
  render() {
    return(
      <Profile
        editProfile={editProfile}
        editStatus={this.props.editStatus}
        dispatch={this.props.dispatch}
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
    const loading = !usersSub.ready();
    
    let users = null;
    loading ? (users = null) : (users = Meteor.users.find().fetch());
    const usersExists = !loading && !!users;
    return {
        loading,
        users,
        usersExists,
    } }, ProfileContainer);

export default connect(mapStateToProps)(ExtendedProfileContainer);

// export default ProfileContainer;