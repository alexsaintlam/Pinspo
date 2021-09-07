import React from 'react';
import { Route } from 'react-router-dom';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavContainer />
            <SplashContainer />
        </header>
    </div>
);

export default App;