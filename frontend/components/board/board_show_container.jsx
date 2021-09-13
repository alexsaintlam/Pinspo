import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mSTP = (state, ownProps) => {
    return({
        board: state.entities.boards[ownProps.match.params.boardId],
        // pins: state.entities.boards[ownProps.match.params.boardId].pins
    })
}

const mDTP = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId))
})

export default connect(mSTP, mDTP)(BoardShow)
