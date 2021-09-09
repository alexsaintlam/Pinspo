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
                <div>{user.username}</div>
                <div>{user.email}</div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default UserShow;