import React from 'react';
import { Link } from 'react-router-dom';
import PinstoboardIndex from '../pinstoboard/pinstoboard_index_container';

class BoardShow extends React.Component {
    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId);
        this.props.fetchUsers();
    }

    render() {
        const { board, users } = this.props;
        if (!users) return null;
        if (!board) return null;

        return(
            <div className="show-board">
                <div className="show-board-head">
                    <div className="show-board-title">{board.name}</div>
                    <div className="show-board-avatar"><img src={picture1} /></div>
                    <div className="show-board-info">
                        <div className="show-board-user">{users[board.user_id].username}</div>
                        <div className="show-dot">·</div>
                        <div className="show-board-desc">{board.description}</div>
                    </div>
                    <div className="show-board-follows">229 Hardcoded</div>
                    <PinstoboardIndex board={board} />
                </div>
            </div>
        )
    }
}

export default BoardShow;