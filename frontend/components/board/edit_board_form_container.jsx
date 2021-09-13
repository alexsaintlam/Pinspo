import React from 'react';
import { connect } from 'react-redux';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

class EditBoardForm extends React.Component {
    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId);
    }

    render () {
        const { board, formType, submitBoard } = this.props;

        if (!board) return null;
        return (
            <div>
                <div className="edit-header">Edit your board</div>
                <div className="edit-name-container">
                    <div className="edit-name">Name</div>
                    <input className="edit-name-input"></input>
                </div>
                <div className="edit-description-container">
                <div className="edit-description">Description</div>
                <input className="edit-description-input"></input>
                </div>

            </div>
        );
    }
}

const mSTP = ({entities: {boards}}, ownProps) => ({
    board: boards[ownProps.match.params.boardId],
    formType: 'Update Board'
})

const mDTP = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    submitBoard: board => dispatch(updateBoard(board))
})

export default connect(mSTP, mDTP)(EditBoardForm);