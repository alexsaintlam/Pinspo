import React from 'react';
import { Link } from 'react-router-dom';
import PinFeedbackForm from './pin_feedback_form'

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }

    render() {
        

        const { pin } = this.props;
        if (!pin) return null;

        return(
            <div className="pin-container">
                <div className="pin-body">
                    <div className="pin-picture">
                        <img src={picture3} />
                    </div>
                    <div className="pin-side">
                        <div className="pin-header">
                            <div className="pin-dropdown">Profile</div>
                            <button className="pin-save">Save</button>
                        </div>
                        <div className="pin-title">{pin.title}</div>
                        <div className="pin-description">{pin.description}</div>
                        <div className="author-container">
                            <img className="pin-avatar" src={picture2} />
                            <div className="pin-user">
                                <div className="pin-username">Sample User</div>
                                <div className="pin-followers">100 followers</div>
                            </div>
                            <div className="nav-fil"></div>
                            <button className="pin-unfollow" >Following</button>
                        </div>
                        <PinFeedbackForm />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PinShow;