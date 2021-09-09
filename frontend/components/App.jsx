import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';
import BoardIndexContainer from './board/board_index_container';
import BoardShowContainer from './board/board_show_container';
import CreateBoardFormContainer from './board/create_board_form_container';
import EditBoardFormContainer from './board/edit_board_form_container';
import PinIndexContainer from './pin/pin_index_container';
import PinShowContainer from './pin/pin_show_container';
import CreatePinFormContainer from './pin/create_pin_form_container';
import EditPinFormContainer from './pin/edit_pin_form_container';
import FollowIndexContainer from './follow/follow_index_container';
import UserShowContainer from './user/user_show_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavContainer />
            <SplashContainer />
            <Route exact path="/" component={BoardIndexContainer} />
            <Route exact path="/" component={PinIndexContainer} />
            <Route exact path="/" component={FollowIndexContainer} />
        </header>
        
        <Switch>
            <Route path="/boards/new" component={CreateBoardFormContainer} />
            <Route path="/boards/:boardId/edit" component={EditBoardFormContainer} />
            <Route path="/pins/new" component={CreatePinFormContainer} />
            <Route path="/pins/:pinId/edit" component={EditPinFormContainer} />
            <Route exact path="/boards/:boardId" component={BoardShowContainer} />
            <Route exact path="/pins/:pinId" component={PinShowContainer} />
            <Route exact path="/users/:userId" component={UserShowContainer} />
        </Switch>
    </div>
);

export default App;