import types from '../actions/types';

const initialState = 'light';

export default function(state=initialState, action) {
    switch(action.type) {
        case types.TOGGLE_THEME:
            return state == 'light' ? 'dark' : 'light';
        default:
            return state;
    }
}