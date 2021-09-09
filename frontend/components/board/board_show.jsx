import React from 'react';
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {
    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {
        const { board } = this.props;

        return(
            <div>
                <div>{board.name}</div>
                <div>{board.description}</div>
                <div>{board.user_id}</div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default BoardShow;