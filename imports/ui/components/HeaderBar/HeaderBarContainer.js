import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

import HeaderBar from './HeaderBar';

class HeaderBarContainer extends Component {
  handleLogout() {
    Meteor.logout((error) => {
      if (error) {
        console.log("There was an error:" + error.reason);
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    if (Meteor.userId() && this.props.inviteData) {
      return (
        <div>
          <HeaderBar
            dispatch={this.props.dispatch}
            handleLogout={(e) => {
              this.handleLogout(e);
            }}
            numberOfInvites={this.props.inviteData[0].profile.pendingLunches}
          />
        </div>
      );
    } else {
      return null;
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
  } }, HeaderBarContainer);

export default connect(mapStateToProps)(ExtendedHeaderBarContainer);