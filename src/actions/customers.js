import types from './types';

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