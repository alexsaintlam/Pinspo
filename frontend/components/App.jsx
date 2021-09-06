import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './nav/nav_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>
    </div>
);

export default App;