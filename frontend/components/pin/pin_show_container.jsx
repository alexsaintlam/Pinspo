import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import PinShow from './pin_show';

const mSTP = (state, ownProps) => {
    return ({
        pin: state.entities.pins[ownProps.match.params.pinId],
        users: state.entities.users
    })
    
}

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchPin: pinId => dispatch(fetchPin(pinId))
})

export default connect(mSTP, mDTP)(PinShow)
