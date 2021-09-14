import React from 'react';
import { Link } from 'react-router-dom';
import PtbIndexItem from './ptb_index_item';


class PinstoboardIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPinstoboards();
    }

    render () {
        const { pinstoboards, deletePinstoboard, createPinstoboard, board } = this.props;
        
        let ptbArr = Object.values(pinstoboards);
        let filteredPTB = ptbArr.filter(ptb => ptb.board_id === board.id)

        return (
            <div>
                <div className="save-unorganized-gallery">
                        {
                            filteredPTB.map(ptb => <PtbIndexItem
                                                        ptb={ptb}
                                                        deletePinstoboard={deletePinstoboard}
                                                        createPinstoboard={createPinstoboard}
                                                        key={ptb.id}
                                                    />
                                            )
                        }
                </div>
            </div>
        )
    }
}

export default PinstoboardIndex;