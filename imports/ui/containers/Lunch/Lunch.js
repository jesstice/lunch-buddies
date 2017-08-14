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

const Lunch = ({ filteredLunch }) => {
  const user = Meteor.user();
  const user_id = Meteor.userId();
  // const lunchBuddy = 

  return (
    <div className="lunchWrapper">
      <Paper zDepth={3}>
          <div>
            <div className="lunchBuddies">
              <h1 className="lunchInfo">Lunch Buddies</h1>
              <ul>
                  <li>
                    <Gravatar email={filteredLunch.names[0][0].emails[0].address} className="gravatarImage" size={150}/>
                    {filteredLunch.names[0][0].profile.fullName}
                  </li>
              </ul>
            </div>
            <h1 className="lunchInfo">Lunch Details</h1>
            <h2>Budget:</h2>
            <ul>
              {filteredLunch.filteredLunch[0].budget[0].map((budget, index) => (
                <li key={index}>{budget}</li>
              ))}
            </ul>
            <h2>Cuisines:</h2>
            <ul>
              {filteredLunch.filteredLunch[0].cuisines[0].map((cuisine, index) => (
                <li key={index}>{cuisine}</li>
              ))}
            </ul>
            <div>
              <RaisedButton
                href=""
                target="_blank"
                label="Leave this lunch"
                primary={true}
                style={styles.button}
              />
            </div>
          </div>
      </Paper>
    </div>
  )
};

export default Lunch;