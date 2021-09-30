import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPinstoboards, deletePinstoboard, createPinstoboard } from '../../actions/pinstoboard_actions';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchPinstoboards;
    }

    handleDelete(pinId) {
        let filterPtbArr = Object.values(this.props.pinsToBoards).filter(
            ptb => ptb.pin_id === pinId)
        
        for (let i = 0; i < filterPtbArr.length; i++) {
            let filterptb = filterPtbArr[i];
            this.props.deletePinstoboard(filterptb.id);
        }

        this.props.deletePin(pinId)
    }

    render() {
        const { pin, currentUser, createPinstoboard, pinsToBoards, deletePinstoboard } = this.props;
        
        const validOwner = () => {
            if (currentUser) {
                if (pin.user_id === currentUser.id) {
                    return (<div className="pin-delete" onClick={() => this.handleDelete(pin.id)}><DeleteForeverIcon style={{ fontSize: 40 }}/></div>)
                }
            } 
        }

        const ptbObj = (pinId, currUser) => (
            Object.values(pinsToBoards).findIndex(function(ptb) {
                return (ptb.unorganized_id === currUser) && (ptb.pin_id === pinId)
            })
        )    
        
        return (
            <div className="picture-container">
                <Link to={`/pins/${pin.id}`} className="pin-link"><img src={pin.photoUrl} /></Link>
                {Object.values(pinsToBoards)[ptbObj(pin.id, currentUser.id)] ? 
                <button className="gallery-unsave" onClick={() => deletePinstoboard(Object.values(pinsToBoards)[ptbObj(pin.id, currentUser.id)].id)}>Unsave</button> :
                <button className="gallery-save" onClick={() => createPinstoboard({pin_id: pin.id, unorganized_id: currentUser.id})}>Save</button> }
                {validOwner()} 
                
            </div>
        )
    }
}

const mSTP = state => ({
    pinsToBoards: state.entities.pinstoboards
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
    deletePinstoboard: pinstoboard => dispatch(deletePinstoboard(pinstoboard)),
    createPinstoboard: pinstoboard => dispatch(createPinstoboard(pinstoboard))
})

export default connect(mSTP, mDTP)(PinIndexItem);