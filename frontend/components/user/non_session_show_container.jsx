import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { openFollowModal } from '../../actions/follow_modal_actions';
import NonSessionShow from './non_session_show';

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    openFollowModal: followModal => dispatch(openFollowModal(followModal))
})

export default connect(null, mDTP)(NonSessionShow)