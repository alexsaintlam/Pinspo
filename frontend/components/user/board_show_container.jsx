import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mSTP = ({entities: {boards}}, ownProps) => ({
    board: boards[ownProps.match.params.boardId]
})

const mDTP = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId))
})

export default connect(mSTP, mDTP)(BoardShow)
