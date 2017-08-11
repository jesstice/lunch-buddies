import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const Profile = ({ updateEditStatus, dispatch, editStatus, userData, currentUserId }) => (
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
          secondary={true}
          className="profileButton"
        />
      : null
      }
    </div>
    <div className="inviteContainer">
      <LunchInvites
        userData={userData}
      />
    </div>
  </div>
);

export default Profile;
