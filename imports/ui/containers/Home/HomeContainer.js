import React, { Component } from 'react';
import Home from './Home';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class HomeContainer extends Component {

    render() {
      return <Home />
    }
}

export default createContainer(function() {
  Meteor.subscribe('users');
    return {
      users: Meteor.users.find({}, { fields: {email: 1, profile: 1} }).fetch() //can use find({title: “kek”}) to specify query;
  };
}, HomeContainer);
