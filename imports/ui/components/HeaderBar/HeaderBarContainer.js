import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { withRouter, Redirect } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import Login from '../../containers/Login/index';
import Loader from '../Loader/index';
import HeaderBar from './HeaderBar';

class HeaderBarContainer extends Component {
  handleLogout() {
    Meteor.logout((error) => {
      if (error) {
        console.log("There was an error:" + error.reason);
      } else {
        console.log('logged out')
      }
    });
  }

  render() {
    if (Meteor.userId()) {
      if (this.props.inviteData) {
        return (
          <div>
            <HeaderBar
              dispatch={this.props.dispatch}
              handleLogout={this.handleLogout}
              numberOfInvites={this.props.inviteData[0].profile.pendingLunches}
            />
          </div>
        );
      } else {
        return (
          <Loader />
        )
      }
    } else {
      return (
        <Redirect
          to={'/login'}
        />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    openStatus: state.invites.showInvites
  };
}

const ExtendedHeaderBarContainer = createContainer(() => {
  const usersSub = Meteor.subscribe('users');

  let inviteData = null;
  !usersSub.ready() ? (users = null) : (inviteData = Meteor.users.find({ _id: Meteor.userId() }).fetch());
  return {
    inviteData,
  }
}, HeaderBarContainer);

export default connect(mapStateToProps)(ExtendedHeaderBarContainer);