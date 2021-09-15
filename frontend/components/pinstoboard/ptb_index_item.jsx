import React from 'react';
import { Link } from 'react-router-dom';
import SaveDrop from './save_drop';

class PtbIndexItem extends React.Component {

    render () {
        const { ptb, pins } = this.props;
        
        const pinsArr = Object.values(pins)

        let pinObj = pinsArr.findIndex(function(pin) {
            return pin.id === ptb.pin_id
        })

        return (
            <div className="save-picture-container">
                <Link to={`/pins/${ptb.pin_id}`} className="pin-link"><img className="save-board-pin" src={pinsArr[pinObj].photoUrl} /></Link>
                <div className="save-drop"><SaveDrop ptb={ptb} /></div>
            </div>
        )
    }
    
}

export default PtbIndexItem;

// const PtbIndexItem = (props) => {

//     return (
//         <div className="save-picture-container">
//             <Link to={`/pins/${props.ptb.pin_id}`} className="pin-link"><img className="save-board-pin" src={picture2} /></Link>
//             <div className="save-drop"><SaveDrop ptb={props.ptb} /></div>
//         </div>
//     )
// }





