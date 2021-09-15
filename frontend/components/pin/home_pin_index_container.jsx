import { connect } from 'react-redux';
import { fetchPins, deletePin } from '../../actions/pin_actions';
import { fetchUsers } from '../../actions/user_actions';
import HomePinIndex from './home_pin_index';

const mSTP = state => ({
    pins: Object.values(state.entities.pins),
    currentUser: state.entities.users[state.session.id]

})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPins: () => dispatch(fetchPins())
})

export default connect(mSTP, mDTP)(HomePinIndex);