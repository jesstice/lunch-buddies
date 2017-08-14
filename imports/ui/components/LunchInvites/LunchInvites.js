import React from 'react';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from '../Loader/';
import './styles.css';

const LunchInvites = ({ userData, lunchData, acceptButton, declineButton }) => {

  const invites = lunchData.map((lunch) => {
    return (
      <li className="singleInvite" key={lunch._id.toString()}>
        <div className="inviteInfo">
          <p>{lunch.buddies[0].map(buddy => buddy.profile.fullName)} like to be your lunch buddy!</p>
          <p>Budget: ${lunch.budget.toString()}</p>
          <p>Invite sent: {lunch.createdOn.toString()}</p>
        </div>
        <div className="inviteActions">
          <RaisedButton
            label="Accept"
            primary
            className="lunchButton"
            onTouchTap={() => acceptButton(lunch._id)}
          />
          <RaisedButton
            label="Decline"
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
          disabled={ !userData.profile.currentLunch ? false : true }
        />
      </div>
      <h2>Lunch Invitations!</h2>
      <ul>
        {userData.profile.pendingLunches.length === 0 ?
          <li>
            <p> Looks like you have no invites! Go invite a buddy to lunch!</p>
          </li>
          :
          invites
        }
      </ul>
    </div>
  )
}

export default LunchInvites;