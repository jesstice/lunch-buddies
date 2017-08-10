// ACTION CONSTANT
export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';
export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';
export const UPDATE_FULLNAME_FIELD = 'UPDATE_FULLNAME_FIELD';
export const UPDATE_BUDGET_FIELD = 'UPDATE_BUDGET_FIELD';
export const UPDATE_CUISINES_FIELD = 'UPDATE_CUISINES_FIELD';
export const UPDATE_INTERESTS_FIELD = 'UPDATE_INTERESTS_FIELD';
export const UPDATE_PHONE_FIELD = 'UPDATE_PHONE_FIELD';
export const SHOW_EMAIL_ERROR = 'SHOW_EMAIL_ERROR';
export const SHOW_PASSWORD_ERROR = 'SHOW_PASSWORD_ERROR';

// ACTION CREATORS
export function updateEmailField(emailField) {
    return {
        type: UPDATE_EMAIL_FIELD,
        payload: emailField
    };
}

export function updatePasswordField(passwordField) {
    return {
        type: UPDATE_PASSWORD_FIELD,
        payload: passwordField
    };
}

export function updateFullnameField(fullnameField) {
    return {
        type: UPDATE_FULLNAME_FIELD,
        payload: fullnameField
    };
}

export function updateBudgetField(budgetField) {
    return {
        type: UPDATE_BUDGET_FIELD,
        payload: budgetField
    };
}

export function updateCuisinesField(cuisinesField) {
    return {
        type: UPDATE_CUISINES_FIELD,
        payload: cuisinesField
    };
}

export function updateInterestsField(interestsField) {
    return {
        type: UPDATE_INTERESTS_FIELD,
        payload: interestsField
    };
}

export function updatePhoneField(phoneField) {
    return {
        type: UPDATE_PHONE_FIELD,
        payload: phoneField
    };
}

export function showEmailError(emailError) {
    return {
        type: SHOW_EMAIL_ERROR,
        payload: emailError
    };
}

export function showPasswordError(passwordError) {
    return {
        type: SHOW_PASSWORD_ERROR,
        payload: passwordError
    };
}

// REDUCERS
const initialState = {
    emailField: '',
    passwordField: '',
    fullnameField: '',
    budgetField: '',
    cuisinesField: [],
    interestsField: [],
    phoneField: '',
    emailError: '',
    passwordError: ''
};

export function formsReducer(state = initialState, action) {
    switch (action.type) {
    case UPDATE_EMAIL_FIELD:
        const emailState = {
            ...state,
            emailField: action.payload
        };
        return emailState;

    case UPDATE_PASSWORD_FIELD:
        const passwordState = {
            ...state,
            passwordField: action.payload
        };
        return passwordState;

    case UPDATE_FULLNAME_FIELD:
        const fullnameState = {
            ...state,
            fullnameField: action.payload
        };
        return fullnameState;

    case UPDATE_BUDGET_FIELD:
        const budgetState = {
            ...state,
            budgetField: action.payload
        };
        return budgetState;

    case UPDATE_CUISINES_FIELD:
        const cuisinesState = {
          ...state,
          cuisinesField: action.payload
        };
        return cuisinesState;

    case UPDATE_INTERESTS_FIELD:
        const interestsState = {
          ...state,
          interestsField: action.payload
        };
        return interestsState;

    case UPDATE_PHONE_FIELD:
        const phoneState = {
          ...state,
          phoneField: action.payload
        };
        return phoneState;

    case SHOW_EMAIL_ERROR:
        const emailErrorState = {
          ...state,
          emailError: action.payload
        };
        return emailErrorState;

    case SHOW_PASSWORD_ERROR:
        const passwordErrorState = {
          ...state,
          passwordError: action.payload
        };
        return passwordErrorState;

    default:
        return state;
    }
}
