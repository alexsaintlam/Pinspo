import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';


class PinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render () {
        const { pins, deletePin } = this.props;
        let pinsArr = Object.values(pins);

        return (
            <div>
                <div className="unorganized-gallery">
                    <div className="unorganized-image">
                        {
                            pinsArr.map(pin => <PinIndexItem 
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