import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BuddyList from '../../components/BuddyList/BuddyList';
import FilterList from '../FilterList/';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { flipCreateLunchModal } from '../../../../client/redux/modules/lunch';
import InvitationModalContainer from '../InvitationModal/';
import './styles.css';

class HomeContainer extends Component {

  filterBuddiesByTags() {
    const interests = this.props.interestsFilters;
          budget = this.props.budgetFilters;
          cuisines = this.props.cuisineFilters;
          user_id = Meteor.userId();
    let users = this.props.availables;
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
  handleLunch = (invitee_id, fullName) => {
    this.props.dispatch(flipCreateLunchModal({invitee_id, fullName}));
  }
  render() {
    users = this.filterBuddiesByTags();
  return (
    <div className="home">
      <div className="homeFilter">
        <FilterList />
      </div>
        <BuddyList users={users} handleLunch={this.handleLunch}/>
        <InvitationModalContainer />
    </div>
  );
    }
}

function mapStateToProps(state) {
    return {
          interestsFilters: state.filters.interestsFilters,
          cuisineFilters: state.filters.cuisineFilters,
          budgetFilters: state.filters.budgetFilters,
          showLunch: state.lunch.showLunchInvitation
    }
}

const HomeWrap = createContainer(function() {
  Meteor.subscribe('availables');
 // Meteor.subscribe('users');
    return {
      //users: Meteor.users.find({}, { fields: {"emails.address": 1, profile: 1} }).fetch(), //can use find({title: “kek”}) to specify query;
      availables: Meteor.users.find({_id: { $ne: Meteor.userId()}, "profile.available": true}, { fields: {"emails.address": 1, profile: 1} }).fetch()
    };
}, HomeContainer);

export default connect(mapStateToProps)(HomeWrap);

HomeContainer.propTypes = {
  users: PropTypes.arrayOf(
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
    showLunch: PropTypes.bool.isRequired,
    budgetFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    interestsFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    cuisineFilters: PropTypes.arrayOf(PropTypes.string).isRequired    
};