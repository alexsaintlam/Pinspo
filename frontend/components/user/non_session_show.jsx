import React from 'react';
import FollowClick from '../follow/follow_click_container';
import UnfollowClick from '../follow/unfollow_click_container';
import NonSessionSwitch from './non_session_switch';

class NonSessionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { user, profileId, sessionId, followsObj } = this.props;
        if (!user) return null;

        const followStatus = () => {
            for (let key in followsObj) {
                if (followsObj[key].follower_id === sessionId &&
                    followsObj[key].followed_id === profileId) {
                        return (<UnfollowClick follow={followsObj[key]}/>)
                }      
            }
            return (<FollowClick profileId={profileId} session={sessionId}/>)   
        }

        return (
            <div className="user-container">
                <div className="non-session-button">{followStatus()}</div>
                <NonSessionSwitch profileId={profileId} />
            </div>
        
            
        )
    }
}

export default NonSessionShow;
                
                