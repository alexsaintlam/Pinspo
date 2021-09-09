import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
    return (
        <div>
            <Link to={`/boards/${props.board.id}`}>{props.board.name}</Link>
            <Link to={`/boards/${props.board.id}/edit`}>Edit</Link>
            <button onClick={() => props.deleteBoard(props.board)}>Delete Board</button>
        </div>
    )
}

export default BoardIndexItem;