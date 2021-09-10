import React from 'react';

class UnfollowClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.unfollow;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteFollow(this.props.follow);
    }

    render() {
        return (
            <button className="un-follow-button" onClick={this.handleSubmit}>Following</button>
        )
    }
}

export default UnfollowClick

