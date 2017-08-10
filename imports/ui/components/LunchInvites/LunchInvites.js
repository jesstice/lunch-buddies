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

const LunchInvites = ({ userData }) => {

  if (userData) {
    return (
      <Paper className="lunchInviteContainer" zDepth={3}>
        <div className="availability">
          <h2>Availability: </h2>
          <Toggle
            disabled={ userData[0].profile.currentLunch ? true : false }
          />
        </div>
        <h2>Lunch Invitations!</h2>
        <ul>
          <li className="singleInvite">
            <div className="inviteInfo">
              <p>someUser and friends would like to be your lunch buddy!</p>
              <p>Budget: $$</p>
              <p>Invite sent: 5 mins ago</p>
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
        </ul>
      </Paper>
    );
  } else {
    return (
      <Loader />
    );
  }
}

export default LunchInvites;