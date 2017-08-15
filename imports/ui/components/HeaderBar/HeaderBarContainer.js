import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { withRouter, Redirect } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import Login from '../../containers/Login/index';
import Loader from '../Loader/index';
import HeaderBar from './HeaderBar';
import { toggleMyInvites } from '../../../../client/redux/modules/invites';

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

  toggleOpenMyInvites = () => {
    this.props.dispatch(toggleMyInvites())
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
              toggleOpenMyInvites={this.toggleOpenMyInvites}
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

HeaderBarContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inviteData: PropTypes.array,
  openStatus: PropTypes.bool.isRequired
};

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