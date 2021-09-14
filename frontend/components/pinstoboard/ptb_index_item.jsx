import React from 'react';
import { Link } from 'react-router-dom';
import SaveDrop from './save_drop';

const PtbIndexItem = (props) => {
    return (
        <div className="picture-container">
            <Link to={`/pins/${props.ptb.pin_id}`} className="pin-link"><img src={picture2} /></Link>
            <SaveDrop ptb={props.ptb.pin_id} />
        </div>
    )
}

export default PtbIndexItem;