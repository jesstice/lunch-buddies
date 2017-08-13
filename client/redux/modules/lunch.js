export const FLIP_CREATE_LUNCH_MODAL = 'FLIP_CREATE_LUNCH_MODAL';

const initialState = {
  showLunchInvitation: false
}
export function flipCreateLunchModal() {
    return {
    type: 'FLIP_CREATE_LUNCH_MODAL'
  };
}


export function lunchReducer (state = initialState, action) {
  switch (action.type) {
    case FLIP_CREATE_LUNCH_MODAL:
      const lunchState = {
        ...state
      };
      lunchState.showLunchInvitation = !lunchState.showLunchInvitation
      return lunchState;

    default:
      return state;
  }
}
