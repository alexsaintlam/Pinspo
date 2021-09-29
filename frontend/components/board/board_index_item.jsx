import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import BoardItemPins from './board_item_pins';
import BoardModal from '../modal/board_modal';
import { openBoardModal } from '../../actions/board_modal_actions';

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
                <BoardModal board={board} />
                <div className="board-container">
                    <Link to={`/boards/${board.id}`}>            
                    <BoardItemPins board={board} pinstoboards={pinstoboards} pins={pins}/> 
                    </Link>
                    <div className="board-delete" onClick={() => this.props.openBoardModal('edit')}><CreateIcon style={{ fontSize: 35 }}/></div>
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
    openBoardModal: boardModal => dispatch(openBoardModal(boardModal))
});

export default connect(null, mDTP)(BoardIndexItem);

