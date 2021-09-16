import React from 'react';
import { Link } from 'react-router-dom';
import PtbIndexItem from './ptb_index_item';


class PinstoboardIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPinstoboards();
        this.props.fetchPins();
    }

    render () {
        const { pins, pinstoboards, deletePinstoboard, createPinstoboard, board, fetchPins, fetchPinstoboards } = this.props;
        
        let ptbArr = Object.values(pinstoboards);
        let filteredPTB = ptbArr.filter(ptb => ptb.board_id === board.id)

        return (
            <div>
                <div className="unorganized-gallery">
                    <div className="save-unorganized-image">
                        {
                            filteredPTB.map(ptb => <PtbIndexItem
                                                        pins={pins}
                                                        ptb={ptb}
                                                        deletePinstoboard={deletePinstoboard}
                                                        createPinstoboard={createPinstoboard}
                                                        fetchPinstoboards={fetchPinstoboards}
                                                        fetchPins={fetchPins}
                                                        key={ptb.id}
                                                    />
                                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default PinstoboardIndex;