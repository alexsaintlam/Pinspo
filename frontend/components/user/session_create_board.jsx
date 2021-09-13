import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import AddIcon from '@material-ui/icons/Add';

class SessionCreateBoard extends React.Component {
    constructor() {
        super();
        this.state = { showMenu: false };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.state.showMenu ? this.setState({ showMenu: false }) : this.setState({ showMenu: true })
    }

    closeMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: false })
    }

    handleCreate(e) {
        e.preventDefault();
        window.location.replace("#/boards/new")
    }

    render() {
        const dropMenu = () => {
            return(
                <div className="add-drop-background" onClick={this.closeMenu}>
                    <div className="add-drop">
                        <div className="add-drop-body">
                            <div className="add-drop-title">Create</div>
                            <div className="add-drop-links">
                                <div className="add-dropContent">Pin</div>
                                <div className="last-add-dropContent" onClick={this.handleCreate}>Board</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="session-add" onClick={this.showMenu}><AddIcon style={{ fontSize: 34 }} /></div>
                {this.state.showMenu ? dropMenu() : null }
            </div>
        )
    }
};

export default SessionCreateBoard;