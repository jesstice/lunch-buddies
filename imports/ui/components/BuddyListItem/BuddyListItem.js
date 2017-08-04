import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import Paper from 'material-ui/Paper';


const BuddyListItem = () => {
  return (
      <li className="buddyListItemWrapper">
        <Paper zDepth={3}>
          <div className="buddyListInfo">
            <Gravatar email="testemail@gmail.com" className="gravatarImage" />
            <h1>Fullname</h1>
            <p>Name</p>
            <h1>Budget</h1>
            <p>Budget</p>
            <h1>Interests</h1>
            <p>Interests</p>
            <h1>Cuisines</h1>
            <p>Cuisines</p>
          </div>
        </Paper>
      </li>
  )
};

export default BuddyListItem;