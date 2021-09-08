import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import BoardIndexContainer from './board/board_index_container';
import BoardShowContainer from './board/board_show_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavContainer />
            <SplashContainer />
        </header>
        
        <Switch>
            <Route exact path="/" component={BoardIndexContainer} />
            <Route exact path="/boards/:boardId" component={BoardShowContainer} />
        </Switch>
    </div>
);

export default App;