import React, { Component } from 'react';
import BuddyList from '../../components/BuddyList/BuddyList';
import FilterList from '../../components/FilterList/FilterList';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

class HomeContainer extends Component {


  render() {
    interests = this.props.interestsFilters;
    budget = this.props.budgetFilters;
    cuisine = this.props.cuisineFilters;
    users = this.props.users;
  return (
    <div className="home">
      <div className="homeFilter">
        <FilterList />
      </div>
      <BuddyList users={users} cuisine={cuisine} />
    </div>
  );
    }
}

function mapStateToProps(state) {
    return {
          interestsFilters: state.filters.interestsFilters,
          cuisineFilters: state.filters.cuisineFilters,
          budgetFilters: state.filters.budgetFilters
    }
}

const HomeWrap = createContainer(function() {
  Meteor.subscribe('users');
    return {
      users: Meteor.users.find({}, { fields: {"emails.address": 1, profile: 1} }).fetch() //can use find({title: “kek”}) to specify query;
  };
}, HomeContainer);

export default connect(mapStateToProps)(HomeWrap);
