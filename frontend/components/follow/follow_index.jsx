import React from 'react';
import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

class FollowIndex extends React.Component {
    componentDidMount() {
        this.props.fetchFollows();
    }

    render () {
        const { users, follows, profileId, session, deleteFollow, submitFollow } = this.props;
        
        let followsArr = Object.values(follows);

        const followList = (follow) => {
            const followStatus = () => {
                for (let i = 0; i < followsArr.length; i++) {
                    let followObj = followsArr[i];
                    if (followObj.follower_id === session && followObj.followed_id === follow.followed_id) {
                        return (
                            <div key={i}>
                            <button className="follow-unfollow" onClick={() => deleteFollow(followObj)}>Unfollow</button>
                            </div>
                            
                        )
                    }     
                }

                return (<button className="follow-follow" onClick={() => submitFollow({ follower_id: session, followed_id: follow.followed_id})}>Follow</button>)
            }

            return (
                <div key={follow.id} className="follow-item-body">
                    <div className="follow-item" key={follow.id}>  
                        <img className="follow-avatar" src={users[follow.followed_id].photoUrl} />
                        <Link className="follow-name" to={`/users/${follow.followed_id}`} onClick={this.props.closeFollowModal}>{users[follow.followed_id].username}</Link>
                        <div className="nav-fil"></div>
                        {followStatus()}
                    </div>
                </div>
            )
        }

        return (
            <div key={session.id} className="follow-modal">
                <div className="follow-title">Following</div>
                <div onClick={this.props.closeFollowModal} className="close-x"><CloseRoundedIcon /></div>
                <div className="follow-list">
                    <div>
                        {
                            followsArr.map(follow => 
                                follow.follower_id === profileId ? followList(follow) : null
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowIndex;