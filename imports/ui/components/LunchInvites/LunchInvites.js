import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from '../Loader/';
import './styles.css';

const LunchInvites = ({ userData, lunchData, acceptButton, declineButton, availabilityStatus, today }) => {

  const invites = lunchData.map((lunch) => {
    return (
      <li className="singleInvite" key={lunch._id.toString()}>
        <div className="inviteInfo">
          <p>{lunch.buddies[0].map(buddy => buddy.profile.fullName)} like to be your lunch buddy!</p>
          <p>Budget: ${lunch.budget.toString()}</p>
          <p>Invite sent: {lunch.createdOn.toString()}</p>
        </div>
        <div className="inviteActions">
          { lunch.createdOn > today ?
            <RaisedButton
              label="Accept"
              primary
              className="lunchButton"
              onTouchTap={() => acceptButton(lunch._id)}
            />
            :
            null
          }
          <RaisedButton
            label={lunch.createdOn > today ? "Decline" : "Remove Invite" }
            secondary
            className="lunchButton"
            onTouchTap={() => declineButton(lunch._id)}
          />
        </div>
      </li>
    )
  })

  return (
    <div className="lunchInvitesContainer">
      <div className="availability">
        <h2>Availability: </h2>
        <Toggle
          onToggle={() => availabilityStatus()}
          toggled={ userData.profile.available ? true : false }
        />
      </div>
      <h2>Lunch Invitations!</h2>
      <ul>
        {userData.profile.pendingLunches.length === 0 ?
          userData.profile.available ?
            <li>
              <p> Looks like you have no invites! Go invite a buddy to lunch!</p>
            </li>
            :
            <li>
              <p>Looks like you have lunch plans for today! Have fun!</p>
            </li>
          :
          invites
        }
      </ul>
    </div>
  )
}

LunchInvites.propTypes = {
  userData: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      emails: PropTypes.arrayOf(
        PropTypes.shape({
          address: PropTypes.string.isRequired
        })
      ),
      profile: PropTypes.shape({
        available: PropTypes.bool.isRequired,
        budget: PropTypes.string.isRequired,
        cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
        interests: PropTypes.arrayOf(PropTypes.string).isRequired,
        currentLunch: PropTypes.string,
        fullName: PropTypes.string.isRequired,
        pendingLunches: PropTypes.arrayOf(PropTypes.string).isRequired,
        phoneNumber: PropTypes.string.isRequired
      }).isRequired
    }),
  lunchData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      buddies: PropTypes.arrayOf(
        PropTypes.arrayOf(
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
          })
        )
      ),
      budget: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired,
      createdOn: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(
        PropTypes.string
      ),
      due: PropTypes.string.isRequired
    })
  ),
  acceptButton: PropTypes.func.isRequired,
  declineButton: PropTypes.func.isRequired,
};

export default LunchInvites;