// ACTION CONSTANT
export const EDIT_PROFILE = 'EDIT_PROFILE'

// ACTION CREATORS
export function editProfile() {
  return {
    type: EDIT_PROFILE
  };
}

// REDUCERS
const initialState = {
  editProfile: false
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_PROFILE:
      const profileState = {
        ...state
      };
      profileState.editProfile = !profileState.editProfile
      return profileState

    default:
      return state;
  }
}
