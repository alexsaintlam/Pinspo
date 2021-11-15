import React from 'react';
import { Link } from 'react-router-dom';
import NavDrop from './navDrop';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';

const Greeting = ({ currentUser, openModal, users }) => {
    const signedOutNav = () => (
        <div className="navbar">
            <div className="nav-icon"><PinterestIcon style={{ fontSize: 40 }} /></div>
            <div className="nav-header">Pinspo</div>
            <div className="nav-fil"></div>
            <a href="https://linkedin.com/in/alexander-sk-lam" target="_blank">LinkedIn</a>
            <a href="https://github.com/alexsaintlam" target="_blank">Github</a>
            <a href="https://www.alexanderlam.dev/" target="_blank">Portfolio</a>
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
            <Link to="/"><div className="nav-icon"><PinterestIcon style={{ fontSize: 30 }}/></div></Link>
            <Link to="/">Home</Link>
            <div className="searchbar">
                <div className="icon"><SearchIcon /></div>
                <input className="search-input" placeholder="Search" type="text" />
            </div>
            <a href="https://linkedin.com/in/alexander-sk-lam" target="_blank"><div className="icon"><LinkedInIcon /></div></a>
            <a href="https://github.com/alexsaintlam" target="_blank"><div className="icon"><GitHubIcon /></div></a>
            <a href="https://www.alexanderlam.dev/" target="_blank"><div className="icon"><PersonIcon /></div></a>
            <Link to={`/users/${currentUser.id}`}><div><img className="nav-avatar" src={users[currentUser.id].photoUrl} /></div></Link>
            <NavDrop />
        </div>
    )
    
    return currentUser ? signedInNav() : signedOutNav();
}

export default Greeting;