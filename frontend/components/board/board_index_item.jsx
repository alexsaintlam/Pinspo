import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
    return (
        <li>
            <Link to={`/boards/${props.board.id}`}>{props.board.name}</Link>
        </li>
    )
}

export default BoardIndexItem;