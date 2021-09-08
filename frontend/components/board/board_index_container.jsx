import { connect } from 'react-redux';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';
import BoardIndex from './board_index';

const mSTP = ({entities: { boards }}) => ({
    boards: Object.values(boards)
})

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    deleteBoard: board => dispatch(deleteBoard(board))
})

export default connect(mSTP, mDTP)(BoardIndex);