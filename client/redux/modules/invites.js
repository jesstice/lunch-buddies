// ACTION CONSTANT
export const TOGGLE_MY_INVITES = 'TOGGLE_MY_INVITES'

// ACTION CREATORS
export function toggleMyInvites() {
  return {
    type: TOGGLE_MY_INVITES
  };
}

// REDUCERS
const initialState = {
  showInvites: false
};

export function invitesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MY_INVITES:
      const invitesState = {
        ...state
      };
      invitesState.showInvites = !invitesState.showInvites;
      return invitesState;

    default:
      return state;
  }
}
