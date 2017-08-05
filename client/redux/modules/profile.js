// ACTION CONSTANT
<<<<<<< HEAD
export const EDIT_PROFILE = 'EDIT_PROFILE'

// ACTION CREATORS
export function editProfile(editProfile) {
  return {
    type: EDIT_PROFILE,
    payload: editProfile
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
        ...state,
        editProfile: action.payload
      };
      return profileState

    default:
      return state;
  }
}
=======

// ACTION CREATORS

// REDUCERS
>>>>>>> Start to create redux actions
