import React from 'react';
import { Link } from 'react-router-dom';
import NavDrop from './navDrop';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';

const SignedInNav = () => {
    const signedInNav = () => (
        <div className="navbar">
            <div className="nav-icon"><PinterestIcon /></div>
            <Link to="/">Home</Link>
            <div className="searchbar">
                <div className="icon"><SearchIcon /></div>
                <input className="search-input" placeholder="Search" type="text" />
            </div>
            <div className="icon"><NotificationsIcon /></div>
            <div className="icon"><SmsIcon /></div>
            <NavDrop />
        </div>
    )
    
    return signedInNav();
}

export default SignedInNav;