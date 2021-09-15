import React from 'react';
import { Link } from 'react-router-dom';
import SaveDrop from './save_drop';

const PtbIndexItem = (props) => {

    return (
        <div className="save-picture-container">
            <Link to={`/pins/${props.ptb.pin_id}`} className="pin-link"><img className="save-board-pin" src={picture2} /></Link>
            <div className="save-drop"><SaveDrop ptb={props.ptb} /></div>
        </div>
    )
}

export default PtbIndexItem;