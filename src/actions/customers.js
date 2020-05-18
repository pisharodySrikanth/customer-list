import types from './types';

export function setCurrentCustomer(payload) {
    return {
        type: types.SET_CURRENT_CUSTOMER,
        payload
    }
}

export function addEditCustomer(payload) {
    return {
        type: types.ADD_EDIT_CUSTOMER,
        payload
    };
}

export function deleteCustomer(payload) {
    return {
        type: types.DELETE_CUSTOMER,
        payload
    };
}