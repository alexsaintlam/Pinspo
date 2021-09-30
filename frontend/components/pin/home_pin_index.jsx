import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';

class HomePinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
        this.props.fetchUsers();
        this.props.fetchPinstoboards();
    }

    render () {
        const { pins, deletePin, users, currentUser } = this.props;
        if (!users) return null;
        let pinsArr = Object.values(pins);
        
        const homeIndex = () => (
            <div>
                <div className="unorganized-gallery">
                    <div className="unorganized-image">
                        {
                            pinsArr.map(pin => <PinIndexItem 
                                                        users={users}
                                                        currentUser={currentUser}
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

        return this.props.currentUser ? homeIndex() : null;
    }
}

export default HomePinIndex;