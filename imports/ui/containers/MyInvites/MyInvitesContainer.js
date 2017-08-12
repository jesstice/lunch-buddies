import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Lunches } from '../../../api/lunches/index';
import MyInvites from './MyInvites';
import Loader from '../../components/Loader/';

class MyInvitesContainer extends Component {

  render() {
    const loading = this.props.loadingLunch && this.props.loadingUsers;

    return (
      <MyInvites
        openStatus={this.props.openStatus}
        userData={this.props.userData} 
        lunchData={this.props.lunchData}
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

let pendingIds = ['ZPGdi8WgN9rcfhATr', 'hmjDyDz2BhbaiNYoc'];

const ExtendedMyInvitesContainer = createContainer(() => {
  const usersSub = Meteor.subscribe('users');
  const loadingUsers = !usersSub.ready();
  const userData = Meteor.users.find({ _id: Meteor.userId() }).fetch();

  const lunchSub = Meteor.subscribe('lunches');
  const loadingLunch = !lunchSub.ready();
  const lunchData = Lunches.find({ tempId: { $in: pendingIds } }).fetch();

  return {
    userData,
    loadingUsers,
    lunchData,
    loadingLunch,
  } }, MyInvitesContainer);

export default connect(mapStateToProps)(ExtendedMyInvitesContainer);