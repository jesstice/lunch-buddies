import React from 'react';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from '../Loader/';
import './styles.css';


const ViewLunch = () => (
  <RaisedButton
    label="View Lunch"
    primary={true}
    className="lunchButton"
  />
)

const LunchInvites = ({ userData, lunchData }) => {

  const invites = lunchData.map((lunch) => {
    return (
      <li className="singleInvite" key={lunch._id.toString()}>
        <div className="inviteInfo">
          <p>{lunch.buddies.join(', ')} like to be your lunch buddy!</p>
          <p>Budget: ${lunch.budget.toString()}</p>
          <p>Invite sent: {lunch.createdOn.toString()}</p>
        </div>
        <div className="inviteActions">
          <RaisedButton
            label="Accept"
            primary
            className="lunchButton"
            icon={<i className="fa fa-check" aria-hidden="true"></i>}
          />
          <RaisedButton
            label="Decline"
            secondary
            className="lunchButton"
            icon={<i className="fa fa-times" aria-hidden="true"></i>}
          />
        </div>
      </li>
    )
  })

    return (
      <div>
        <div className="availability">
          <h2>Availability: </h2>
          <Toggle
            disabled={ userData[0].profile.currentLunch ? true : false }
          />
        </div>
        <h2>Lunch Invitations!</h2>
        <ul>
          {!userData[0].profile.pendingLunches && userData[0].profile.pendingLunches < 0 ?
            <li>
              <p> Looks like you have no invites! Go invite a buddy to lunch! :&lpar; </p>
            </li>
            :
            invites
          }
        </ul>
      </div>
    )

}

export default LunchInvites;