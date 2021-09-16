import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import BoardShowContainer from './board/board_show_container';
import EditBoardFormContainer from './board/edit_board_form_container';
import PinShowContainer from './pin/pin_show_container';
import CreatePinFormContainer from './pin/create_pin_form_container';
import EditPinFormContainer from './pin/edit_pin_form_container';
import UserShowContainer from './user/user_show_container';
import HomeIndexContainer from './pin/home_pin_index_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <NavContainer />
        <Route exact path="/" component={HomeIndexContainer} />
        <Route exact path="/" component={SplashContainer} />
        
        <Switch>
            <ProtectedRoute path="/boards/:boardId/edit" component={EditBoardFormContainer} />
            <ProtectedRoute path="/pins/new" component={CreatePinFormContainer} />
            <ProtectedRoute path="/pins/:pinId/edit" component={EditPinFormContainer} />
            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
            <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
        </Switch>
    </div>
);

export default App;