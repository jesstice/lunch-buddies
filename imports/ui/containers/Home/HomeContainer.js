import React, { Component } from 'react';
import BuddyList from '../../components/BuddyList/BuddyList';
import FilterList from '../../components/FilterList/FilterList';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

class HomeContainer extends Component {

  filterBuddiesByTags() {
    const interests = this.props.interestsFilters;
          budget = this.props.budgetFilters;
          cuisines = this.props.cuisineFilters;
    let users = this.props.users;
        if (interests.length) {
            users = users.filter(user => user.profile.interests.find(tag => interests.includes(tag)));
            //return users;
        } 
        if (cuisines.length) {
            users = users.filter(user => user.profile.cuisines.find(tag => cuisines.includes(tag)));
            //return users;
        } 
        if (budget.length) {
            users = users.filter(user => user.profile.budget.find(tag => budget.includes(tag)));
            //return users;
        } 
        return users;   
    }

  render() {
    users = this.filterBuddiesByTags();
  return (
    <div className="home">
      <div className="homeFilter">
        <FilterList />
      </div>
      <BuddyList users={users} />
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
