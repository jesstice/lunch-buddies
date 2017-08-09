import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Gravatar from 'react-gravatar';
import './styles.css';

// TO DO: Add "Leave Lunch" button

const styles = {
  button: {
    margin: 12,
  }
}

const Lunch = () => {
  return (
    <div className="lunchWrapper">
      <Paper zDepth={3}>
        <div className="lunchBuddies">
          <h1>Lunch Buddies</h1>
          <li>
            <Gravatar email="testemail@gmail.com" className="gravatarImage" size={150}/>
          </li>
        </div>
        <h1>Lunch Details</h1>
        <p>Budget: $$</p>
        <p>Cuisine: Italian</p>
        <div>
          <RaisedButton
            href=""
            target="_blank"
            label="Leave this lunch"
            primary={true}
            style={styles.button}
            onTouchTap={() => }
          />
        </div>
      </Paper>
    </div>
  )
};

export default Lunch;