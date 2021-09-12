import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class PinFeedbackForm extends React.Component {
    constructor() {
        super();
        this.state = { showMenu: true };

        this.showComment = this.showComment.bind(this);
        this.showPhoto = this.showPhoto.bind(this);
    }

    showComment(e) {
        e.preventDefault();
        this.setState({ showMenu: true })
    }

    showPhoto(e) {
        e.preventDefault();
        this.setState({ showMenu: false })
    }

    render() {
        const showPhotoForm = () => {
            return(
                <div>
                    <div className="pin-photo-form">
                        <div className="pin-photo-phrase">
                            Tried this Pin? <br/>
                            Add a photo to show how it went
                        </div>
                        <button className="pin-photo-button">Add photo</button>
                    </div>
                </div>
            )
        }

        const showCommentsForm = () => {
            return(
                <div>
                    <div className="pin-comment-form">
                        <div className="pin-comment-phrase">
                            Share feedback, ask a question or give a high five
                        </div>
                        <div className="pin-input">
                            <div><img className="pin-avatar" src={picture4} /></div>
                            <input className="pin-comment-input" placeholder="Add a comment"></input>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="pin-feedback">
                    <div className='pin-feedback-body'>
                        <div className="pin-photos" onClick={this.showPhoto} tabIndex="1">Photos</div>
                        <div className="pin-comments" onClick={this.showComment} tabIndex="1">Comments</div>
                    </div>
                </div>
                {this.state.showMenu ? showCommentsForm() : showPhotoForm() }
            </div>
        )
    }
};

export default PinFeedbackForm;