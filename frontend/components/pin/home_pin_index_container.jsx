import { connect } from 'react-redux';
import { fetchPins, deletePin } from '../../actions/pin_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchPinstoboards } from '../../actions/pinstoboard_actions';
import HomePinIndex from './home_pin_index';

const mSTP = state => ({
    pins: Object.values(state.entities.pins),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPins: () => dispatch(fetchPins()),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
})

export default connect(mSTP, mDTP)(HomePinIndex);