import { connect } from 'react-redux';
import { deleteFollow } from '../../actions/follow_actions';
import UnfollowClick from './unfollow_click';

const mSTP = (state, ownProps) => {
    return ({
        unfollow: {
            follower_id: "",
            followed_id: ""
        }
    })
}

const mDTP = dispatch => ({
    submitUnfollow: follow => dispatch(deleteFollow(follow))
})

export default connect(mSTP, mDTP)(UnfollowClick);