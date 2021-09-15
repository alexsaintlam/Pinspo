import React from 'react';
import { Link } from 'react-router-dom';
import FollowClick from '../follow/follow_click_container';
import UnfollowClick from '../follow/unfollow_click_container';

class PinUserShow extends React.Component {

    render() {
        const { users, pin, session, follows } = this.props;
        if (!users) return null;
        let followerCount = 0;

        const followerCounter = () => {
            for (let key in follows) {
                if (follows[key].followed_id === pin.user_id) {
                    followerCount += 1;
                }
            }

            return followerCount;
        }

        const followStatus = () => {
            for (let key in follows) {
                if (follows[key].follower_id === session &&
                    follows[key].followed_id === pin.user_id) {
                        return (<UnfollowClick follow={follows[key]}/>)
                }      
            }
            return (<FollowClick profileId={pin.user_id} session={session}/>)   
        }

        return(   
            <div className="author-container">
                <img className="pin-avatar" src={picture2} />
                <div className="pin-user">
                    <Link className="pin-username" to={`/users/${pin.user_id}`}>{users[pin.user_id].username}</Link>
                    <div className="pin-followers">{`${followerCounter()} followers`}</div>
                </div>
                <div className="nav-fil"></div>
                <div className="pin-show-follow">{followStatus()}</div>
            </div>            

        )
    }
}



export default PinUserShow;