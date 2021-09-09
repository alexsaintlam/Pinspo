import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = (props) => {
    return (
        <div>
            <Link to={`/pins/${props.pin.id}`}>{props.pin.title}</Link>
            <Link to={`/pins/${props.pin.id}/edit`}>Edit</Link>
            <button onClick={() => props.deletePin(props.pin)}>Delete Pin</button>
        </div>
    )
}

export default PinIndexItem;