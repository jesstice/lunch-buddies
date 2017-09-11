import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import Lunch from './Lunch';
import { Lunches } from '../../../api/lunches/index';
import InvitationModal from '../../components/InvitationModal/';
import Loader from '../../components/Loader/';

class LunchContainer extends Component {
user = Meteor.user();
assignBuddiesToLunch () {
  filteredLunch = this.props.mylunch[0]
  return filteredLunch.buddies.reduce((acc, cur)=> {
    acc.buddies.push(this.props.userData.find(user => cur === user._id));
    return acc;
  }, {...filteredLunch, buddies: []})
}
  leaveCurrentLunch = () => {
    if (user.profile.currentLunch) {
      Meteor.call('users.removeLunch', (error) => {
        if (error) {
          console.log("There was an error: " + error.reason);
        } else {
          this.props.history.push(`/profile/${user._id}`)
        }
      })
    }
  }

  render() {
    if (this.props.userData.length && this.props.mylunch.length) {
      filteredLunch = this.assignBuddiesToLunch();
      return (
        <Lunch
          filteredLunch={filteredLunch}
          leaveCurrentLunch={this.leaveCurrentLunch}
        />
      )
    } else {
      return <Loader />
    }
  }
}

LunchContainer.propTypes = {
    userData: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        emails: PropTypes.arrayOf(
          PropTypes.shape({
            address: PropTypes.string.isRequired
          })
        ),
        profile: PropTypes.shape({
          available: PropTypes.bool.isRequired,
          budget: PropTypes.arrayOf(PropTypes.string).isRequired,
          cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
          interests: PropTypes.arrayOf(PropTypes.string).isRequired,
          currentLunch: PropTypes.string,
          fullName: PropTypes.string.isRequired,
          pendingLunches: PropTypes.arrayOf(PropTypes.string).isRequired,
          phoneNumber: PropTypes.string.isRequired
        }).isRequired
      })),
    mylunch: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      buddies: PropTypes.arrayOf(PropTypes.string),
      cuisines: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
      budget: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
      createdOn: PropTypes.date,
      due: PropTypes.string
    })).isRequired,
};

const ExtendedLunchContainer = createContainer(function () {
if(Meteor.subscribe('users').ready() && Meteor.subscribe('currentlunch').ready()) {
  return {
    userData: Meteor.users.find().fetch(),
    mylunch: Lunches.find({_id: Meteor.user().profile.currentLunch}).fetch()
  }
} else {
  return {userData: [], mylunch: []}
}
}, LunchContainer);

export default connect()(ExtendedLunchContainer);
