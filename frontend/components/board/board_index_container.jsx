import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';
import { fetchPinstoboards } from '../../actions/pinstoboard_actions';
import BoardIndex from './board_index';

const mSTP = state => ({
    boards: Object.values(state.entities.boards),
    pinstoboards: state.entities.pinstoboards,
    pins: state.entities.pins
})

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
    deleteBoard: board => dispatch(deleteBoard(board))
})

export default connect(mSTP, mDTP)(BoardIndex);