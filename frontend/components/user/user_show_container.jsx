import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { openFollowModal } from '../../actions/follow_modal_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    user: state.entities.users[ownProps.match.params.userId],
    session: state.session.id,
    follows: state.entities.follows
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    openFollowModal: followModal => dispatch(openFollowModal(followModal))
})

export default connect(mSTP, mDTP)(UserShow)
