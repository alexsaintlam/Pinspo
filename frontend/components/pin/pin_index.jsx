import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';


class PinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render () {
        const { pins, deletePin, profileId } = this.props;
        let pinsArr = Object.values(pins);
        
        let profilePinsArr = pinsArr.filter(pin => pin.user_id === profileId)

        return (
            <div>
                <div className="unorganized-gallery">
                    <div className="unorganized-image">
                        {
                            profilePinsArr.map(pin => <PinIndexItem 
                                                        pin={pin}
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

export default PinIndex;