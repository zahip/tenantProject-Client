import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../actionsTypes';
import { addError, removeError } from './errors';
import { loadTenants } from './tenants';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function setAuthoriationToken(token) {
    setTokenHeader(token);
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        setAuthoriationToken(false);
        dispatch(setCurrentUser({}))
        dispatch(loadTenants([]))
    }
}

export function authUser(type, userData) {
    return dispatch => {
             return new Promise((resolve, reject) => {
                 return apiCall("post", `/api/auth/${type}`, userData)
                 .then(({token, ...user}) => {
                     localStorage.setItem('jwtToken', token)
                     setAuthoriationToken(token);
                     dispatch(setCurrentUser(user));
                     dispatch(removeError());
                     resolve();
                 })
                 .catch(err => {
                     dispatch(addError(err.message))
                     reject();
                 })
             })
        }
}
