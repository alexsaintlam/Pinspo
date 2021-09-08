import React from 'react';
import BoardIndexItem from './board_index_item';


class BoardIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBoards();
    }

    render () {
        const { boards, deleteBoard } = this.props;
        return (
            <div>
                <div>
                    {
                        boards.map(board => <BoardIndexItem
                                                    board={board}
                                                    deleteBoard={deleteBoard}
                                                    key={board.id}
                                            />
                                    )
                    }
                </div>
            </div>
        )
    }
}

export default BoardIndex;