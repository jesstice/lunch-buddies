import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lunch from './Lunch';

class LunchContainer extends Component {
  handleLunchCreation = () => {
    const user = Meteor.userId();
    const options = {
      budget: ['under 10'],
      buddies: [user],
      cuisines: ['Italian', 'Burgerland']
    }
    if (options && user) {
      Meteor.call('lunches.createLunch', {user, options}, (error) => {
        if (error) {
          console.log("There was an error: " + error.reason);
        } else {
          this.props.history.push('/')
        }
      }
      )
    }
}
  
  render() {
    return (
   
    <Lunch handleLunchCreation={this.handleLunchCreation} />

    )
  }
}

export default LunchContainer;