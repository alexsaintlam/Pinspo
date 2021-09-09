import React from 'react';

class FollowIndex extends React.Component {
    componentDidMount() {
        this.props.fetchFollows();
    }

    render () {
        const { follows, deleteFollow } = this.props;
        return (
            <div>
                {
                    follows.map(follow => <div key={follow.id}>
                                            {follow.followed_id}
                                            <button onClick={() => deleteFollow(follow)}>Unfollow</button>
                                        </div>       
                                )
                }
            </div>
        )
    }
}

export default FollowIndex;