import { combineReducers } from 'redux';
import { profileReducer } from '../redux/modules/profile';
import { invitesReducer } from '../redux/modules/invites';
import { userAvailabilityReducer } from '../redux/modules/user';

export default combineReducers({
  profile: profileReducer,
  invites: invitesReducer,
  avail: userAvailabilityReducer
});