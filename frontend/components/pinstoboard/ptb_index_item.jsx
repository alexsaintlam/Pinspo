import React from 'react';
import { Link } from 'react-router-dom';
import SaveDrop from './save_drop';

class PtbIndexItem extends React.Component {

    render () {
        const { ptb, pins } = this.props;

        if (!pins) return null;
        if (Object.values(pins).length < 1) return null;
        
        const pinsArr = Object.values(pins)

        let pinObj = pinsArr.findIndex(function(pin) {
            return pin.id === ptb.pin_id
        })

        return (
            <div className="save-picture-container">
                <div className="save-hover-child"><SaveDrop ptb={ptb} pins={pins}/></div>
                <Link to={`/pins/${ptb.pin_id}`} className="pin-link"><img className="save-board-pin" src={pinsArr[pinObj].photoUrl} /></Link>
            </div>
        )
    }
    
}

export default PtbIndexItem;







