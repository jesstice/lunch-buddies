import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from '../../components/Loader/Loader';
import EditableProfile from '../../components/EditableProfile/EditableProfile';
import './styles.css';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';

handleFullname = (event) => {
  this.props.dispatch(updateFullnameField(event.target.value));
}

handlePhone = (event) => {
  this.props.dispatch(updatePhoneField(event.target.value));
}

handleBudget = (event) => {
  this.props.dispatch(updateBudgetField(event.target.value));
}

handleCuisines = (event) => {
  this.props.dispatch(updateCuisinesField(event.target.value));
}

handleInterests = (event) => {
  this.props.dispatch(updateInterestsField(event.target.value));
}


const Profile = ({ updateEditStatus, editUserProfile, dispatch, editStatus, userData, handleEmail, handlePassword, handleFullname, handlePhone }) => (

  <div className="profileContainer">
    <div>
      {(!editStatus && userData) ?
        <BuddyListItem userData={userData[0]} />
        :
        (editStatus && userData) ?
          <EditableProfile
            userData={userData[0]}

            editUserProfile={editUserProfile}

            handleFullname={handleFullname}

            handleBudget={handleBudget}

            handleCuisines={handleCuisines}

            handleInterests={handleInterests}

            handlePhone={handlePhone}

            dispatch={dispatch}
          />
          :
          <Loader />
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
