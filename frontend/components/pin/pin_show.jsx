import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }

    render() {
        const { pin } = this.props;

        return(
            <div>
                <div>{pin.title}</div>
                <div>{pin.description}</div>
                <div>{pin.user_id}</div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default PinShow;