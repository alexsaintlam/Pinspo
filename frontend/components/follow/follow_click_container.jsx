import { connect } from 'react-redux';
import { createFollow } from '../../actions/follow_actions';
import FollowClick from './follow_click';

const mSTP = (state, ownProps) => {
    return ({
        follow: {
            follower_id: "",
            followed_id: ""
        }
    })
}

const mDTP = dispatch => ({
    submitFollow: follow => dispatch(createFollow(follow))
})

export default connect(mSTP, mDTP)(FollowClick);