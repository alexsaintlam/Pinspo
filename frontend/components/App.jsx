import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import BoardIndexContainer from './board/board_index_container';
import BoardShowContainer from './board/board_show_container';
import PinIndexContainer from './pin/pin_index_container';
import PinShowContainer from './pin/pin_show_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavContainer />
            <SplashContainer />
        </header>
        
        <Route exact path="/" component={BoardIndexContainer} />
        <Route exact path="/" component={PinIndexContainer} />
        
        <Switch>   
            <Route exact path="/boards/:boardId" component={BoardShowContainer} />
            <Route exact path="/pins/:pinId" component={PinShowContainer} />
        </Switch>
    </div>
);

export default App;