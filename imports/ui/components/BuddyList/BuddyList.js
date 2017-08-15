import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BuddyListItem from '../BuddyListItem/BuddyListItem';
import { createContainer } from 'meteor/react-meteor-data';

const BuddyList = ({ users, handleLunch }) => {
  const buds = users.map((buddy)=> {
    return ( <BuddyListItem userData={buddy} key={buddy._id} handleLunch={handleLunch} /> )
  });
  return (
    <div className="buddyListWrapper">
      <ul>
       {buds}
      </ul>
    </div>
  );
};

BuddyList.propTypes = {
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
  handleLunch: PropTypes.func.isRequired
};

export default BuddyList;