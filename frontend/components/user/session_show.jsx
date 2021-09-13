import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import PinIndex from '../pin/pin_index_container';
import BoardIndex from '../board/board_index_container';
import SessionCreateBoard from './session_create_board';

class SessionShow extends React.Component {
    render() {
        return (
            <div className="session-show-body">
                <SessionCreateBoard />
                <BoardIndex />
                <div className="session-line-container">
                    <hr className="session-line" />
                </div>
                <div className="session-unorganized">
                    <div className="unorganized-header">
                        <div className="header-ideas">Unorganized ideas</div>
                        <button className="organize-button">Organize</button>
                    </div>
                    
                </div>
                <PinIndex />
            </div>
        )  
    }
}

export default SessionShow;

