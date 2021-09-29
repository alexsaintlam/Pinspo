import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import PinIndex from '../pin/pin_index_container';
import BoardIndex from '../board/board_index_container';
import SessionCreateBoard from './session_create_board';

class SessionShow extends React.Component {
    render() {
        const { user, profileId, sessionId } = this.props;

        return (
            <div className="session-show-body">
                <SessionCreateBoard />
                <BoardIndex user={user} profileId={profileId} sessionId={sessionId}/>
                <div className="session-line-container">
                    <hr className="session-line" />
                </div>
                <div className="session-unorganized">
                    <div className="unorganized-header">
                        <div className="header-ideas">Unorganized ideas</div>
                    
                    </div>
                    
                </div>
                <PinIndex profileId={profileId} />
            </div>
        )  
    }
}

export default SessionShow;

