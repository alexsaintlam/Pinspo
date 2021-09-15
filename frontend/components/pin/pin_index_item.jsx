import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = (props) => {
    return (
        <div className="picture-container">
            <Link to={`/pins/${props.pin.id}`} className="pin-link"><img src={props.pin.photoUrl} /></Link>
            <button className="gallery-save">Save</button>
        </div>
    )
}

export default PinIndexItem;