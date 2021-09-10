import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        const { user } = this.props;

        return(
            <div>
                <div className="user-head">
                    <div className="user-headerpic">
                        <img className="user-banner" src={banner} />
                    </div>
                    <div className="user-under-banner">
                        <img className="user-avatar" src={picture1} />
                        <div className="user-name">Boca do Lobo</div>
                        <div className="user-about">Sample about filler for profile page</div>
                        <div className="user-follow">
                            <div className="user-followers">100 followers</div>
                            <div className="user-dot">·</div>
                            <div className="user-following">200 following</div>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>            
                </div>

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

export default UserShow;