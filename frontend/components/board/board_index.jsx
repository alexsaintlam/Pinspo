import React from 'react';
import BoardIndexItem from './board_index_item';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBoards();
    }

    render () {
        const { boards, deleteBoard } = this.props;
        let boardsArr = Object.values(boards);
        return (
            <div className="session-show-gallery">
                {
                    boardsArr.map(board => <BoardIndexItem
                                                board={board}
                                                deleteBoard={deleteBoard}
                                                key={board.id}
                                        />
                                )
                }
            </div>
        )
    }
}

export default BoardIndex;