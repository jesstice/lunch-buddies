import React from 'react';
import { connect } from 'react-redux';
import SignUp from '../../components/SignUp/';
import LunchInvites from '../../components/LunchInvites/';
import BuddyListItem from '../../components/BuddyListItem/';
import editProfile from '../../../../client/redux/modules/profile';

const style = {
  margin: 12,
};

const Profile = ({ edit }) => (
  <div className="profile-container">
    <div>
      {!edit ?
        <BuddyListItem />
      :
        <SignUp />
      }
      <RaisedButton
        label="Edit Profile"
        onTouchTap={() => editProfile(true)}
        secondary={true}
        disabled={edit ? true : false} // disable button if editing profile
        style={style}
      />
    </div>
    <LunchInvites />
  </div>
);

function mapStateToProps(state) {
  return {
    edit: state.profile.editProfile
  };
}

export default connect(mapStateToProps)(Profile);