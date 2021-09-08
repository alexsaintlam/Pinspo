import React from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Greeting = ({ currentUser, logout, openModal }) => {
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
            <a href="url">Home</a>
            <div className="searchbar">
                <div className="icon"><SearchIcon /></div>
                <div className="search-input">
                    <input type="text" />
                </div>
            </div>
            <div className="icon"><NotificationsIcon /></div>
            <div className="icon"><SmsIcon /></div>
            <div className="nav-dropdown">
                <div className="icon"><ExpandMoreIcon /></div>
                <div className="nav-dropConent">
                    <button className="header-button" onClick={logout}>Log Out</button>
                </div>
            </div>
        </div>
    )
    
    return currentUser ? signedInNav() : signedOutNav();
}

export default Greeting;