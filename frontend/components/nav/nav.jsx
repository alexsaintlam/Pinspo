import React from 'react';
import { Link } from 'react-router-dom';
import NavDrop from './navDrop';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';

const Greeting = ({ currentUser, openModal }) => {
    const signedOutNav = () => (
        <div className="navbar">
            <div className="nav-icon"><PinterestIcon style={{ fontSize: 40 }} /></div>
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
        <div className="navbar">
            <div className="nav-icon"><PinterestIcon /></div>
            <Link to="/">Home</Link>
            <div className="searchbar">
                <div className="icon"><SearchIcon /></div>
                <div className="search-input">
                    <input type="text" />
                </div>
            </div>
            <div className="icon"><NotificationsIcon /></div>
            <div className="icon"><SmsIcon /></div>
            <NavDrop />
        </div>
    )
    
    return currentUser ? signedInNav() : signedOutNav();
}

export default Greeting;