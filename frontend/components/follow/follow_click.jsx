import React from 'react';

class FollowClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.follow;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.submitFollow({ follower_id: this.props.session, followed_id: this.props.profileId});
    }

    render() {
        return (
            <button className="follow-button" onClick={this.handleSubmit}>Follow</button>
        )
    }
}

export default FollowClick

