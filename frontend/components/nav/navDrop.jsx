import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class NavDrop extends React.Component {
    constructor() {
        super();
        this.state = { showMenu: false };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.state.showMenu ? this.setState({ showMenu: false }) : this.setState({ showMenu: true })
    }

    closeMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: false })
    }

    render() {
        const dropMenu = () => {
            return(
                <div className="nav-drop">
                    <div className="nav-dropContent">Settings</div>
                    <div className="nav-dropContent">Tune your home feed</div>
                    <div className="nav-dropContent">Get help</div>
                    <div className="nav-dropContent">See terms and privacy</div>
                    <div className="last-nav-dropContent" onClick={this.props.logout}>Log out</div>
                </div>
            )
        }
        return (
            <div>
                <div className="drop-icon" onClick={this.showMenu}><ExpandMoreIcon /></div>
                {this.state.showMenu ? dropMenu() : null }
            </div>
        )
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mDTP)(NavDrop);