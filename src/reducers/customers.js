import types from '../actions/types';

let lastIndex = 3;

const initialState = {
    list: [{
        name: 'Srikanth',
        key: 1,
        age: 24,
        gender: 'Male',
        location: 'Mumbai'
    }, {
        name: 'Ramesh',
        key: 2,
        age: 24,
        gender: 'Male',
        location: 'Mumbai'
    }, {
        name: 'Suresh',
        key: 3,
        age: 24,
        gender: 'Male',
        location: 'Mumbai'
    }],
    current: 2
};

export default function(state=initialState, action) {
    const payload = action.payload;

    switch(action.type) {
        case types.ADD_EDIT_CUSTOMER: {
            const list = [...state.list];
            const current = state.current;
            if(state.current !== -1) {
                const index = list.findIndex(i => i.key === current);
                list[index] = {
                    ...payload.customer
                };
            } else {
                lastIndex++;
                list.push({
                    ...payload.customer,
                    key: lastIndex
                });
            }
            return {
                list,
                current: -1
            };
        }
        case types.DELETE_CUSTOMER: {
            const list = [...state.list];
            const index = list.findIndex(i => i.key === payload.key);
            if(index !== -1) {
                list.splice(index, 1);
            }
            return {
                ...state,
                list
            };
        }
        default:
            return state;
    }
}

