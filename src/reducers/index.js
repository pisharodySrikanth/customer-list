import {combineReducers} from 'redux';
import customerReducer from './customers';
import themeReducer from './theme';

export default combineReducers({
    theme: themeReducer,
    customers: customerReducer
});