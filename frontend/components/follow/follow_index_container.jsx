import { connect } from 'react-redux';
import { fetchFollows, deleteFollow } from '../../actions/follow_actions';
import FollowIndex from './follow_index';

const mSTP = (state) => ({
    follows: Object.values(state.entities.follows),
    session: state.session.id
})

const mDTP = dispatch => ({
    fetchFollows: () => dispatch(fetchFollows()),
    deleteFollow: follow => dispatch(deleteFollow(follow))
})

export default connect(mSTP, mDTP)(FollowIndex);