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
  userData = this.props.userData;
  lunchData = this.props.lunchData;
  user = Meteor.user();

  filterCurrentLunch = () => {
    allLunches = this.props.lunchData;
    user = Meteor.user();
    filteredLunch = allLunches.filter(lunch => user.profile.currentLunch === lunch._id);
    names = filteredLunch[0].buddies.reduce((acc, curr) => {
      lunchBuddies = this.props.userData.filter(user => user._id === curr)
      acc.push(lunchBuddies);
      return acc
    }, [])
    result = {
      filteredLunch,
      names
    }
    return result;
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

    if (this.props.userData && this.props.lunchData) {
      filteredLunch = this.filterCurrentLunch();
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
    userData: PropTypes.array,
    lunchData: PropTypes.array,
};

const ExtendedLunchContainer = createContainer(function () {
if(Meteor.subscribe('users').ready() && Meteor.subscribe('lunches').ready()) {
  return {
    userData: Meteor.users.find().fetch(),
    lunchData: Lunches.find().fetch(),
  }
} else {
  return {}
}
}, LunchContainer);

export default connect()(ExtendedLunchContainer);
