import { combineReducers } from 'redux';
import { profileReducer } from '../redux/modules/profile';
import { invitesReducer } from '../redux/modules/invites';
import { userAvailabilityReducer } from '../redux/modules/user';
import { filtersReducer } from '../redux/modules/filters';

export default combineReducers({
  profile: profileReducer,
  invites: invitesReducer,
  avail: userAvailabilityReducer,
  filters: filtersReducer
});