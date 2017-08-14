import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, withRouter } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import './styles.css';

// TO DO: Add "Leave Lunch" button

const styles = {
  button: {
    margin: 12,
  }
}

const Lunch = ({ filteredLunch, userData }) => {
  user = Meteor.user();
  user_id = Meteor.userId();

  return (
    <div className="lunchWrapper">
      <Paper zDepth={3}>
        <div className="myLunchContainer">
          <div className="lunchBuddies">
            <h1 className="lunchInfo">Lunch Buddies</h1>
            <ul>
              <li>
                <Link to={`/profile/${userData._id}`}>
                  <Gravatar email={filteredLunch.names[0][0].emails[0].address} className="gravatarImage" size={150} />
                  <p>{filteredLunch.names[0][0].profile.fullName}</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lunchDetails">
            <h1 className="lunchInfo">Lunch Details</h1>
            <div className="lunchDetailsInner">
              <div className="lunchBudget">
                <h2>Budget:</h2>
                <ul>
                  {filteredLunch.filteredLunch[0].budget[0].map((budget, index) => (
                    <li key={index}>{budget}</li>
                  ))}
                </ul>
              </div>
              <div className="lunchCuisines">
                <h2>Cuisines:</h2>
                <ul>
                  {filteredLunch.filteredLunch[0].cuisines[0].map((cuisine, index) => (
                    <li key={index}>{cuisine}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="leaveLunch">
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

export default withRouter(Lunch);