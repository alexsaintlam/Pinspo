import { BorderAll } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board, deleteBoard, openModal } = this.props;
        if (!board) return null;
        
        return (
            <div>
                <div className="board-container">
                    <Link to={`/boards/${board.id}`}><img src={picture1} /></Link>
                    <div className="board-delete" onClick={() => deleteBoard(board)}><DeleteForeverIcon style={{ fontSize: 40 }}/></div>
                    <div className="board-insight">
                        <div className="board-title">{board.name}</div>
                        <div className="board-sub-title">
                            <div className="board-pin-count">2 pins</div>
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

