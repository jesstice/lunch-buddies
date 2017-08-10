import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const Profile = ({ updateEditStatus, dispatch, editStatus, userData }) => (
  <div className="profileContainer">
    <div>
      {!editStatus ?
        <BuddyListItem userData={userData} />
      :
        <SignUp 

        />
      }
      <RaisedButton
        label={editStatus ? "Cancel" : "Edit Profile"}
        onTouchTap={() => dispatch(updateEditStatus())}
        secondary={true}
        className="profileButton"
      />
    </div>
    <LunchInvites />
  </div>
);

export default Profile;
