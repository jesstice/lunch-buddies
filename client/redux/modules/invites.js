// ACTION CONSTANT
export const SHOW_INVITES_MODAL = 'SHOW_INVITES_MODAL'

// ACTION CREATORS
export function showInvitesModal(showInvites) {
  return {
    type: EDIT_PROFILE,
    payload: showInvites
  };
}

// REDUCERS
const initialState = {
  showInvites: false
};

export function invitesReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_INVITES_MODAL:
      const invitesState = {
        ...state,
        showInvites: action.payload
      };
      return invitesState

    default:
      return state;
  }
}