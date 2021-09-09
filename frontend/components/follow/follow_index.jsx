import React from 'react';
import { Link } from 'react-router-dom';

class FollowIndex extends React.Component {
    componentDidMount() {
        this.props.fetchFollows();
    }

    render () {
        const { follows, session, deleteFollow } = this.props;

        const followList = (follow) => {
            return (
                <div key={follow.id}>
                    <Link to={`/users/${follow.followed_id}`}>{follow.followed_id}</Link>
                    <button onClick={() => deleteFollow(follow)}>Unfollow</button>
                </div>
            )
        }

        return (
            <div>
                {
                    follows.map(follow => 
                        follow.follower_id === session ? followList(follow) : null
                    )
                }
            </div>
        )
    }
}

export default FollowIndex;

