import { LOAD_TENANTS, REMOVE_TENANT } from '../actionsTypes';

const tenants = (state = [], action) => {
    switch(action.type) {
        case LOAD_TENANTS:
            return [...action.tenants];
        case REMOVE_TENANT:
            return state.filter(tenant => tenant._id !== action.tenantId)
        default:
            return state;
    }
}

export default tenants;