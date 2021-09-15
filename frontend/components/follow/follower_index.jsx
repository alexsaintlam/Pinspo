import React from 'react';
import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

class FollowerIndex extends React.Component {
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
                    if (followObj.follower_id === session && followObj.followed_id === follow.follower_id) {
                        return (
                            <button className="follow-unfollow" onClick={() => deleteFollow(followObj)}>Unfollow</button>
                        )
                    }
                }
    
                return (<button className="follow-follow" onClick={() => submitFollow({ follower_id: session, followed_id: follow.follower_id})}>Follow</button>)
            }

            return (
                

                <div className="follow-item" key={follow.id}>  
                    <img className="follow-avatar" src={picture1} />
                    <Link className="follow-name" to={`/users/${follow.follower_id}`} onClick={this.props.closeFollowModal}>{users[follow.follower_id].username}</Link>
                    <div className="nav-fil"></div>
                    {followStatus()}
                </div>
            )
        }

        return (
            <div className="follow-modal">
                <div className="follow-title">Followers</div>
                <div onClick={this.props.closeFollowModal} className="close-x"><CloseRoundedIcon /></div>
                <div className="follow-list">
                    <div>
                        {
                            followsArr.map(follow => 
                                follow.followed_id === profileId ? followList(follow) : null
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowerIndex;
