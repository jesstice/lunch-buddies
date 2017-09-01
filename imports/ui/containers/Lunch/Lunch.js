import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, withRouter } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import Moment from 'moment';

import './styles.css';

const styles = {
  button: {
    margin: 12,
  }
}

const Lunch = ({ filteredLunch, leaveCurrentLunch }) => {

  const lunchBuds = filteredLunch.buddies.map((buddy) => {
    return (
      <li key={buddy._id}>
        <Link to={`/profile/${buddy._id}`}>
          <Gravatar email={buddy.emails[0].address} className="gravatarImage" size={150} />
        </Link>
          <p className="lunchBudName">{buddy.profile.fullName}</p>
          <p className="interests">Interests:</p>
          <p>{buddy.profile.interests.join(', ')}</p>
          <p className="phoneNumber">Phone Number:</p>
          <p>{buddy.profile.phoneNumber}</p>
      </li>
    )
  });

  return (
    <div className="lunchWrapper">
      <Paper zDepth={3}>
        <div className="myLunchContainer">
          <div className="lunchBuddies">
            <h1 className="lunchInfo">Lunch Buddies</h1>
            <ul>
              {lunchBuds}
            </ul>
          </div>
          <div className="lunchDetails">
            <h1 className="lunchInfo">Lunch Details</h1>
            <div className="lunchDetailsInner">
              <div className="lunchBudget">
                <h2>Budget:</h2>
                <ul>
                  {filteredLunch.budget[0].map((budget, index) => (
                    <li key={index}>{budget}</li>
                  ))}
                </ul>
              </div>
              <div className="lunchCuisines">
                <h2>Cuisines:</h2>
                <ul>
                  {filteredLunch.cuisines[0].map((cuisine, index) => (
                    <li key={index}>{cuisine}</li>
                  ))}
                </ul>
              </div>
              <div className="lunchCreationDate">
                <h2>Lunch Creation Date:</h2>
                <p>{Moment(filteredLunch.createdOn).fromNow()}</p>
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
              onTouchTap={() => { leaveCurrentLunch() }}
            />
          </div>
        </div>
      </Paper>
    </div>
  )
};

Lunch.propTypes = {
  filteredLunch: PropTypes.shape({
      _id: PropTypes.string,
      buddies: PropTypes.arrayOf(
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
      cuisines: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
      interests: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
      createdOn: PropTypes.date,
      due: PropTypes.string
    }).isRequired,
  leaveCurrentLunch: PropTypes.func.isRequired
};

export default withRouter(Lunch);
