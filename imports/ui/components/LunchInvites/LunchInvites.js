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
      <Paper zDepth={3}>
        <div>
          <h2>Availability: </h2>
          <Toggle
            disabled={ userData[0].profile.currentLunch ? true : false }
            className="lunchToggle"
          />
        </div>
        <ul>
          <li>
            <p>someUser and friends would like to be your lunch buddy!</p>
            <p>Budget: $$</p>
            <p>Invite sent: 5 mins ago</p>
            <div>
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