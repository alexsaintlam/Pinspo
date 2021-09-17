import { BorderAll } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BoardItemPins from './board_item_pins';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board, deleteBoard, pinstoboards, pins } = this.props;
        if (!board) return null;
        if (!pins) return null;
        if (!pinstoboards) return null;
        let ptbArr = Object.values(pinstoboards)
        let pinCount = 0;

        for (let i = 0; i < ptbArr.length; i++) {
            let ptb = ptbArr[i];
            if (ptb.board_id === board.id) {
                pinCount += 1;
            }
        }
        
        return (
            <div>
                <div className="board-container">
                    <Link to={`/boards/${board.id}`}>            
                    <BoardItemPins board={board} pinstoboards={pinstoboards} pins={pins}/> 
                    </Link>
                    <div className="board-delete" onClick={() => deleteBoard(board)}><DeleteForeverIcon style={{ fontSize: 40 }}/></div>
                    <div className="board-insight">
                        <div className="board-title">{board.name}</div>
                        <div className="board-sub-title">
                            <div className="board-pin-count">{pinCount} pins</div>
                            <div className="board-date">6w</div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mDTP)(BoardIndexItem);

