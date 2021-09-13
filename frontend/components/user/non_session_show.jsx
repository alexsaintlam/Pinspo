import React from 'react';
import FollowClick from '../follow/follow_click_container';
import UnfollowClick from '../follow/unfollow_click_container';

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
                <div className="user-body">
                    <div className="user-body-head">
                        <button className="user-created-button">Created</button>
                        <button className="user-saved-button">Saved</button>
                    </div>
                    <div className="user-body-gallery">
                        <div className="picture-container">
                            <img src={picture1} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture2} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture3} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture4} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture1} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture2} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture3} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture1} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture1} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture1} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture1} />
                            <button className="gallery-save">Save</button>
                        </div>
                        <div className="picture-container">
                            <img src={picture1} />
                            <button className="gallery-save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        
            
        )
    }
}

export default NonSessionShow;
                
                