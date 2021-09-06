import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Greeting = ({ currentUser, logout, openModal }) => {
    const signedOutNav = () => (
        <div className="navbar">
            <div className="nav-icon"><PinterestIcon /></div>
            <div className="nav-header">Pinspo</div>
            <div className="nav-fil"></div>
            <a href="url">About</a>
            <a href="url">Business</a>
            <a href="url">Blog</a>
            <div className="nav-button">
                <button onClick={() => openModal('login')} className="login-button">Log in</button>
            </div>
            <div className="nav-button">
                <button onClick={() => openModal('signup')} className="signup-button">Sign up</button>
            </div>
        </div>
    )

    const signedInNav = () => (
        <hgroup className="header-group">
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    )
    
    return currentUser ? signedInNav() : signedOutNav();
}

export default Greeting;