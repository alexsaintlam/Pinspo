import { connect } from 'react-redux';
import { fetchPinstoboards, deletePinstoboard, createPinstoboard } from '../../actions/pinstoboard_actions';
import { fetchPins } from '../../actions/pin_actions';
import PinstoboardIndex from './pinstoboard_index';

const mSTP = (state) => ({
    pinstoboards: Object.values(state.entities.pinstoboards),
    pins: state.entities.pins
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
    deletePinstoboard: pinstoboard => dispatch(deletePinstoboard(pinstoboard)),
    createPinstoboard: pinstoboard => dispatch(createPinstoboard(pinstoboard)),
})

export default connect(mSTP, mDTP)(PinstoboardIndex);