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
                <div>
                    {
                        pinsArr.map(pin => <PinIndexItem 
                                                    pin={pin}
                                                    deletePin={deletePin}
                                                    key={pin.id}
                                            />
                                    )
                    }
                </div>
                <Link to="/pins/new">New Pin</Link>
            </div>
        )
    }
}

export default PinIndex;