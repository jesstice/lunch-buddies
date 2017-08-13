const FLIP_CREATE_LUNCH_MODAL = 'FLIP_CREATE_LUNCH_MODAL';
const CUISINE_SELECTION = 'CUISINE_SELECTION';
const BUDGET_SELECTION = 'BUDGET_SELECTION';

const initialState = {
  showLunchInvitation: false,
  invitee_id: null,
  invitee_fullName: null,
  budget_selection: [],
  cuisine_selection: []
}
//flipper of invitation modal, with the invitee's data
export function flipCreateLunchModal(data) {
    return {
    type: 'FLIP_CREATE_LUNCH_MODAL',
    payload: data
  };
}
export function selectCuisine(data) {
  return {
    type: 'CUISINE_SELECTION',
    payload: data
  }
}
export function selectBudget(data) {
  return {
    type: 'BUDGET_SELECTION',
    payload: data
  }
}

export function lunchReducer (state = initialState, action) {
  switch (action.type) {
    case FLIP_CREATE_LUNCH_MODAL:
      const lunchState = {
        ...state
      };
      lunchState.showLunchInvitation = !lunchState.showLunchInvitation;
      if(action.payload) {
      lunchState.invitee_id = action.payload.invitee_id;
      lunchState.invitee_fullName = action.payload.fullName;
      } else {
        lunchState.invitee_id = null;
        lunchState.invitee_fullName = null;
      }
      return lunchState;
    case CUISINE_SELECTION:
      return {...state, cuisine_selection: action.payload}
    case BUDGET_SELECTION:
      return {...state, budget_selection: action.payload}  
    default:
      return state;
  }
}
