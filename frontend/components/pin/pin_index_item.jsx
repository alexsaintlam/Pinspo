import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pin } = this.props;

        return (
            <div className="picture-container">
                <Link to={`/pins/${pin.id}`} className="pin-link"><img src={pin.photoUrl} /></Link>
                <button className="gallery-save">Save</button>
            </div>
        )
    }
}

export default PinIndexItem;