import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { openFollowModal } from '../../actions/follow_modal_actions';
import PinUserShow from './pin_user_show';

const mSTP = (state) => ({
    users: state.entities.users,
    session: state.session.id,
    follows: state.entities.follows
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mSTP, mDTP)(PinUserShow)
