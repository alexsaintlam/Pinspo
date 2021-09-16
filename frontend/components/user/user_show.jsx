import React from 'react';
import { Link } from 'react-router-dom';
import FollowModal from '../modal/follow_modal';
import NonSessionShow from './non_session_show_container';
import SessionShow from './session_show_container';

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUsers()
    }

    render() {
        const { user, users } = this.props;
        if(!users) return null;
        if (!user) return null;
        const profileId = parseInt(this.props.match.params.userId)
        const sessionId = this.props.session
        const followsObj = this.props.follows
        let followingCount = 0;
        let followerCount = 0;

        const followingCounter = () => {
            for (let key in followsObj) {
                if (followsObj[key].follower_id === profileId) {
                    followingCount += 1;
                }
            }

            return followingCount;
        }

        const followerCounter = () => {
            for (let key in followsObj) {
                if (followsObj[key].followed_id === profileId) {
                    followerCount += 1;
                }
            }

            return followerCount;
        }

        return(
            <div>
                <FollowModal profileId={profileId} session={sessionId}/>
                <div className="user-head">
                    <div className="user-headerpic">
                        <img className="user-banner" src={banner} />
                    </div>
                    <div className="user-under-banner">
                        <img className="user-avatar" src={users[user.id].photoUrl} />
                        <div className="user-name">{user.username}</div>
                        <div className="user-about">Hi I am the biggest pea brain.</div>
                        <div className="user-follow">
                            <div onClick={() => this.props.openFollowModal('following')}
                                className="user-follow-text">{`${followerCounter()} followers`}</div>
                            <div className="user-dot">·</div>
                            <div onClick={() => this.props.openFollowModal('followers')} 
                                className="user-follow-text">{`${followingCounter()} following`}</div>
                        </div>
                        
                    </div>            
                </div>
                {profileId === sessionId ? <SessionShow user={user} profileId={profileId} sessionId={sessionId} followsObj={followsObj}/> : 
                <NonSessionShow user={user} profileId={profileId} sessionId={sessionId} followsObj={followsObj} />}
            </div>
        )
    }
}

export default UserShow;