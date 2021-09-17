import { connect } from 'react-redux';
import { fetchPins, deletePin } from '../../actions/pin_actions';
import PinIndex from './pin_index';

const mSTP = state => ({
    pins: Object.values(state.entities.pins),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    deletePin: pinId => dispatch(deletePin(pinId))
})

export default connect(mSTP, mDTP)(PinIndex);