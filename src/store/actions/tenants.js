import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_TENANTS, REMOVE_TENANT, EDIT_TENANT } from '../actionsTypes';

export const loadTenants = tenants => ({
    type: LOAD_TENANTS,
    tenants
})

export const remove = tenantId => ({
    type: REMOVE_TENANT,
    tenantId
})

export const edit = tenant => ({
    type: EDIT_TENANT,
    tenant
})

export const removeTenant = (user_id, tenant_id) => {
    return dispatch => {
        return apiCall('delete', `/api/users/${user_id}/tenants/${tenant_id}`)
        .then(() => dispatch(remove(tenant_id)))
        .catch(err => dispatch(addError(err.message)));
    }
}

export const editTenant = (user_id, tenant_id, data) => {
    return dispatch => {
        return apiCall('post', `/api/users/${user_id}/tenants/${tenant_id}`, data)
        .then(res => console.log(res))
    }
}

export const fetchTenants = (user_id) => {
    return dispatch => {
        return apiCall('get', `api/${user_id}/tenants`)
        .then(res => {
            dispatch(loadTenants(res))
        })
        .catch(err => addError(err.message))
    }
}

export const postNewTenant = tenantData => (dispatch, getState) => {
    console.log(tenantData);
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall("post", `/api/users/${id}/tenants`, tenantData)
    .then(res => {
        console.log(res)
        return dispatch(loadTenants(res.tenants))
    })
    .catch(err => dispatch(addError(err.message)))
}

