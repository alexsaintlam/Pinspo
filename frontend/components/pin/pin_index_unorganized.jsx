import React from 'react';
import PinIndexItem from './pin_index_item';
import { connect } from 'react-redux';
import { fetchPins, deletePin } from '../../actions/pin_actions';
import { fetchPinstoboards, deletePinstoboard } from '../../actions/pinstoboard_actions';

class PinIndexUnorg extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
        this.props.fetchPinstoboards();
    }

    render () {
        const { pins, deletePin, profileId, currentUser, pinsToBoards } = this.props;
        let pinsArr = Object.values(pins);
        let profilePinsArr = pinsArr.filter(pin => pin.user_id === profileId)
        let filteredPTB = Object.values(pinsToBoards).filter(ptb => ptb.unorganized_id === (profileId))
        let concatArr = [];

        const findPinObj = (ptbId) => (
            pinsArr.findIndex(function(pin) {
                return pin.id === ptbId
            })
        )
        
        for (let i = 0; i < filteredPTB.length; i++) {
            let ptb = filteredPTB[i];
            let pinObj = findPinObj(ptb.pin_id)

            if (!profilePinsArr.includes(pinsArr[pinObj])) {
                concatArr.push(pinsArr[pinObj]);
            }
        }

        for (let i = 0; i < profilePinsArr.length; i++) {
            let profpin = profilePinsArr[i];
            concatArr.push(profpin);
        }

        return (
            <div>
                <div className="unorganized-gallery">
                    <div className="unorganized-image">
                        {
                            concatArr.map(pin => <PinIndexItem 
                                                        pin={pin}
                                                        currentUser={currentUser}
                                                        deletePin={deletePin}
                                                        key={pin.id}
                                                />
                                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    pins: Object.values(state.entities.pins),
    currentUser: state.entities.users[state.session.id],
    pinsToBoards: state.entities.pinstoboards
})

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    deletePin: pinId => dispatch(deletePin(pinId)),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
    deletePinstoboard: pinstoboard => dispatch(deletePinstoboard(pinstoboard)),
})

export default connect(mSTP, mDTP)(PinIndexUnorg);