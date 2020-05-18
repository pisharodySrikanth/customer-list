import types from './types';

export function addCustomer(payload) {
    return {
        type: types.ADD_CUSTOMER,
        payload
    };
}

export function deleteCustomer(payload) {
    return {
        type: types.DELETE_CUSTOMER,
        payload
    };
}