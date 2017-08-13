import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import './styles.css';

const Profile = ({ updateEditStatus, dispatch, editStatus, userData, currentUserId, lunchData }) => (
  <div className="profileContainer">
    <div>
      {editStatus && currentUserId === Meteor.userId() ?
        <SignUp />
      :
        <BuddyListItem userData={userData[0]} />
      }
      {currentUserId === Meteor.userId() ?
        <RaisedButton
          label={editStatus ? "Cancel" : "Edit Profile"}
          onTouchTap={() => dispatch(updateEditStatus())}
          secondary
          className="profileButton"
        />
      : null
      }
    </div>
    {currentUserId === Meteor.userId() ?
      <div className="inviteContainer">
        <Paper className="invitePaper" zDepth={3}>
          <LunchInvites
            userData={userData}
            lunchData={lunchData}
          />
        </Paper>
      </div>
    : null
    }
  </div>
);

export default Profile;
