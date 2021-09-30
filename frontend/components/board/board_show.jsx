import React from 'react';
import { Link } from 'react-router-dom';
import PinstoboardIndex from '../pinstoboard/pinstoboard_index_container';

class BoardShow extends React.Component {
    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId);
        this.props.fetchUsers();
        this.props.fetchFollows();
    }

    render() {
        const { board, users, follows } = this.props;
        if (!users) return null;
        if (!board) return null;
        let followerCount = 0;

        const followerCounter = () => {
            for (let key in follows) {
                if (follows[key].followed_id === board.user_id) {
                    followerCount += 1;
                }
            }

            return followerCount;
        }

        return(
            <div className="show-board">
                <div className="show-board-head">
                    <div className="show-board-title">{board.name}</div>
                    <div className="show-board-avatar"><img src={users[board.user_id].photoUrl} /></div>
                    <div className="show-board-info">
                        <div className="show-board-user">{users[board.user_id].username}</div>
                        <div className="show-dot">·</div>
                        <div className="show-board-desc">{board.description}</div>
                    </div>
                    <div className="show-board-follows">{`${followerCounter()} followers`}</div>
                    <PinstoboardIndex board={board} />
                </div>
            </div>
        )
    }
}

export default BoardShow;