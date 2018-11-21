import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './erros';
import tenants from './tenants';

const rootReducer = combineReducers({
    currentUser,
    errors,
    tenants
});

export default rootReducer;