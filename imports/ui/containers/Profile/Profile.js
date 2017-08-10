import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const Profile = ({ editProfile, dispatch, editStatus }) => (
  <div className="profileContainer">
    <div>
      {!editStatus ?
        <BuddyListItem />
      :
        <SignUp />
      }
      <RaisedButton
        label={editStatus ? "Cancel" : "Edit Profile"}
        onTouchTap={() => dispatch(editProfile())}
        secondary={true}
        className="profileButton"
      />
    </div>
    <LunchInvites />
  </div>
);

export default Profile;
