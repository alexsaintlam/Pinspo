import { connect } from 'react-redux';
import { fetchPins, deletePin } from '../../actions/pin_actions';
import PinIndex from './pin_index';

const mSTP = ({entities: { pins }}) => ({
    pins: Object.values(pins)
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    deletePin: pin => dispatch(deletePin(pin))
})

export default connect(mSTP, mDTP)(PinIndex);