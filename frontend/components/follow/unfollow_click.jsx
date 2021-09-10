import React from 'react';

class UnfollowClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.unfollow;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.submitUnfollow({ follower_id: this.props.session, followed_id: this.props.profileId});
    }

    render() {
        return (
            <button className="follow-button" onClick={this.handleSubmit}>Following</button>
        )
    }
}

export default UnfollowClick

