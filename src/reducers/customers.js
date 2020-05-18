import types from '../actions/types';

const initialState = {
    list: [{
        name: 'Srikanth',
        key: 12,
        age: 24,
        gender: 'Male',
        location: 'Mumbai'
    }, {
        name: 'Ramesh',
        key: 13,
        age: 24,
        gender: 'Male',
        location: 'Mumbai'
    }, {
        name: 'Suresh',
        key: 14,
        age: 24,
        gender: 'Male',
        location: 'Mumbai'
    }],
    current: -1
};

export default function(state=initialState, action) {
    const payload = action.payload;

    switch(action.type) {
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

