import React from 'react';
import PinIndexItem from './pin_index_item';


class PinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render () {
        const { pins, deletePin } = this.props;
        return (
            <div>
                <div>
                    {
                        pins.map(pin => <PinIndexItem
                                                    pin={pin}
                                                    deletePin={deletePin}
                                                    key={pin.id}
                                            />
                                    )
                    }
                </div>
            </div>
        )
    }
}

export default PinIndex;