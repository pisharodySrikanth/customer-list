import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import reducer from './reducers/index';

const root = document.getElementById('root');
const store = createStore(reducer);


ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), root);