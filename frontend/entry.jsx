import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


// for testing remove later!!
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<h1>hi</h1>, root);

    // for testing remove later!!
    window.login = login;
    window.logout = logout;
    window.signup = signup;
});


  