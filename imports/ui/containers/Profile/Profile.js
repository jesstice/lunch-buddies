import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const Profile = ({ updateEditStatus, dispatch, editStatus, userData }) => (
  <div className="profileContainer">
    <div>
      {!editStatus && userData ?
        <BuddyListItem userData={userData[0]} />
      :
        <SignUp />
      }
      <RaisedButton
        label={editStatus ? "Cancel" : "Edit Profile"}
        onTouchTap={() => dispatch(updateEditStatus())}
        secondary={true}
        className="profileButton"
      />
    </div>
    <div className="inviteContainer">
      <LunchInvites
        userData={userData}
      />
    </div>
  </div>
);

export default Profile;
