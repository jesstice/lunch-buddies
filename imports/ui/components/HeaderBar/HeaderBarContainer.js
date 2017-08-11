import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    if (Meteor.userId()) {
      return (
        <div>
          <HeaderBar
            handleLogout={(e) => {
              this.handleLogout(e);
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(HeaderBarContainer);