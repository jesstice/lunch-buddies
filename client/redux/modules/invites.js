// ACTION CONSTANT
export const TOGGLE_MY_INVITES = 'TOGGLE_MY_INVITES';
export const ACCEPT_INVITE = 'ACCEPT_INVITE';
export const DECLINE_INVITE = 'DECLINE_INVITE';

// ACTION CREATORS
export function toggleMyInvites() {
  return {
    type: TOGGLE_MY_INVITES
  };
}

export function acceptInvite(lunchId) {
  return {
    type: 'ACCEPT_INVITE',
    payload: lunchId
  }
}

export function declineInvite(lunchId) {
  return {
    type: 'DECLINE_INVITE',
    payload: lunchId
  }
}

// REDUCERS
const initialState = {
  showInvites: false,
  lunchId: null,
  accept: false,
  decline: false
};

export function invitesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MY_INVITES:
      const invitesState = {
        ...state
      };
      invitesState.showInvites = !invitesState.showInvites;
      if(invitesState.showInvites === false) {
        invitesState.lunchId = null
        invitesState.accept = false
        invitesState.decline = false
      }
      return invitesState;
    case ACCEPT_INVITE:
      const acceptState = {
        ...state,
        lunchId: action.payload,
        accept: true
      };
      return acceptState;
    case DECLINE_INVITE:
      const declineState = {
        ...state,
        lunchId: action.payload,
        decline: true
      };
      return declineState;
    default:
      return state;
  }
}
