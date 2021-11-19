import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchPinstoboards();
        this.props.fetchPins();
    }

    render () {
        const { boards, deleteBoard, profileId, pinstoboards, pins } = this.props;
        let boardsArr = Object.values(boards);
        let profileBoardsArr = boardsArr.filter(board => board.user_id === profileId);

        return (
            <div className="session-show-gallery">
                {
                    profileBoardsArr.map(board => <BoardIndexItem
                                                followerCount={this.props.followerCount}
                                                pins={pins}
                                                board={board}
                                                deleteBoard={deleteBoard}
                                                key={board.id}
                                                pinstoboards={pinstoboards}
                                        />
                                )
                }
            </div>
        )
    }
}

export default BoardIndex;