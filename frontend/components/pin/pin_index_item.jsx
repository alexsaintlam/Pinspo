import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = (props) => {
    return (
        <div>
            <Link to={`/pins/${props.pin.id}`}>{props.pin.title}</Link>
        </div>
    )
}

export default PinIndexItem;