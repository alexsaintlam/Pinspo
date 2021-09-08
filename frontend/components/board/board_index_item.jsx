import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
    return (
        <div>
            <Link to={`/boards/${props.board.id}`}>{props.board.name}</Link>
        </div>
    )
}

export default BoardIndexItem;