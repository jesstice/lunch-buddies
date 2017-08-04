import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BuddyListItem from '../BuddyListItem/BuddyListItem';


const BuddyList = () => {
  return (
    <div className="buddyListWrapper">
      <ul>
        <BuddyListItem />
      </ul>
    </div>
  )
};

export default BuddyList;