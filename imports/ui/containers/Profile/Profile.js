import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';

import Loader from '../../components/Loader/Loader';
import EditableProfile from '../../components/EditableProfile/EditableProfile';

import Paper from 'material-ui/Paper';

import './styles.css';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';

const Profile = ({ updateEditStatus, editUserProfile, dispatch, editStatus, userData, handleEmail, handlePassword, handleFullname, handlePhone, currentUserId, lunchData, handleLunch }) => {
const logged_in_user = Meteor.userId()
const check = (currentUserId === logged_in_user);
  return (
   <div className="profileContainer">
     <div>
       {editStatus && check ?
         <EditableProfile
             userData={userData[0]}
             editUserProfile={editUserProfile}
             handleFullname={handleFullname}
             handlePhone={handlePhone}
             dispatch={dispatch}
          />
       :
         <BuddyListItem userData={userData[0]} handleLunch={handleLunch}/>
       }
       {check ?
       (editStatus ?
         <RaisedButton
           label={"Cancel"}
           onTouchTap={() => dispatch(updateEditStatus())}
           secondary
           className="profileButton"
         />
       : 
       <RaisedButton
           label={"Edit Profile"}
           onTouchTap={() => dispatch(updateEditStatus())}
           secondary
           className="profileButton"
         />)
      :null
       }
     </div>
     <div>
     {check ?
       <div className="inviteContainer">
         <Paper className="invitePaper" zDepth={3}>
           <LunchInvites
             userData={userData[0]}
             lunchData={lunchData}
           />
         </Paper>
       </div>
     : null
     }
     </div>
   </div>
 );
}

export default Profile;
