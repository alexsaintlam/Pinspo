import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
    return (
        <div className="board-container">
            <Link to={`/boards/${props.board.id}`}><img src={picture1} /></Link>
            <Link to={`/boards/${props.board.id}/edit`}>Edit</Link>
            <div className="board-insight">
                <div className="board-title">{props.board.name}</div>
                <div className="board-sub-title">
                    <div className="board-pin-count">2 pins</div>
                    <div className="board-date">6w</div>
                </div>
            </div>
        </div>
    )
}

export default BoardIndexItem;

