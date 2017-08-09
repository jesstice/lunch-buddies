import React from 'react';
// import { connect } from 'react-redux';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Profile = ({ editProfile, dispatch, editStatus }) => (
  <div className="profile-container">
    <div>
      {!editStatus ?
        <BuddyListItem />
      :
        <SignUp />
      }
      <RaisedButton
        label="Edit Profile"
        onTouchTap={() => dispatch(editProfile(true))}
        secondary={true}
        disabled={editStatus ? true : false} // disable button if editing profile
        style={style}
      />
    </div>
    <LunchInvites />
  </div>
);

// function mapStateToProps(state) {
//   return {
//     edit: state.profile.editProfile
//   };
// }

export default Profile;
