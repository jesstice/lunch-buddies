// ACTION CONSTANT
<<<<<<< HEAD
export const USER_AVAILABILITY = 'USER_AVAILABILITY'

// ACTION CREATORS
export function userAvailability (userAvailability) {
  return {
    type: USER_AVAILABILITY,
    payload: userAvailability
  };
}

// REDUCERS
const initialState = {
  userAvailability: true
};

export function userAvailabilityReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AVAILABILITY:
      const userState = {
        ...state,
        userAvailability: action.payload
      };
      return userState

    default:
      return state;
  }
}
=======

// ACTION CREATORS

// REDUCERS
>>>>>>> Start to create redux actions
