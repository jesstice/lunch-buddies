import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BuddyListItem from '../BuddyListItem/BuddyListItem';
import { createContainer } from 'meteor/react-meteor-data';

const BuddyList = ({ users, cuisine }) => {
  const buds = users.map((buddy)=> {
    return ( <BuddyListItem userData={buddy} /> )
  })
  return (
    <div className="buddyListWrapper">
      <ul>
       {buds}
      </ul>
    </div>
  )
};
// testing the nesting

// const buddiesList = createContainer(function() {
//   Meteor.subscribe('users');
//     return {
//       users: Meteor.users.find({}, { fields: {"emails.address": 1, profile: 1} }).fetch() //can use find({title: “kek”}) to specify query;
//   };
// }, BuddyList);

// function mapStateToProps(state) {
//     return {
//           interestsFilters: state.filters.interestsFilters,
//           cuisineFilters: state.filters.cuisineFilters,
//           budgetFilters: state.filters.budgetFilters
//     }
// }
// export default connect(mapStateToProps)(buddiesList);
export default BuddyList;