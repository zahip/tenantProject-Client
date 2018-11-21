import { SET_CURRENT_USER } from '../actionsTypes';

const DEFAULT_STATE = {
    isAuthenticated: false, // will become true when loggen id
    user: {} // all the user info when logged in
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: Object.keys(action.user).length > 0, // if the user object with at least 1 
                user: action.user
            };
        default:
            return state;
    }
}