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
        this.setState({ showMenu: true })
    }

    closeMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: false })
    }

    render() {
        const dropMenu = () => {
            return(
                
                    <div className="nav-dropContent" onClick={this.props.logout}>Log Out</div>
        
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