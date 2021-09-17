import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins;
    }

    render() {
        const { pin, deletePin, currentUser } = this.props;

        const validOwner = () => {
            if (currentUser) {
                if (pin.user_id === currentUser.id) {
                    return (<div className="pin-delete" onClick={() => deletePin(pin.id)}><DeleteForeverIcon style={{ fontSize: 40 }}/></div>)
                }
            }
            
        }

        return (
            <div className="picture-container">
                <Link to={`/pins/${pin.id}`} className="pin-link"><img src={pin.photoUrl} /></Link>
                <button className="gallery-save">Save</button>
                {validOwner()} 
                
            </div>
        )
    }
}

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
})

export default connect(null, mDTP)(PinIndexItem);