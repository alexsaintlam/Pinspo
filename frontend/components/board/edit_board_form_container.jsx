import React from 'react';
import { connect } from 'react-redux';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

class EditBoardForm extends React.Component {
    componentDidMount() {
        this.props.fetchBoard(this.props.boardId);
    }

    render () {
        const { board, formType, submitBoard } = this.props;

        if (!board) return null;
        return (
            <BoardForm
                board={board}
                formType={formType}
                submitBoard={submitBoard} />
        );
    }
}

const mSTP = ({entities: {boards}}, ownProps) => ({
    boardId: boards[ownProps.match.params.boardId],
    formType: 'Update Board'
})

const mDTP = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    submitBoard: board => dispatch(updateBoard(board))
})

export default connect(mSTP, mDTP)(EditBoardForm);