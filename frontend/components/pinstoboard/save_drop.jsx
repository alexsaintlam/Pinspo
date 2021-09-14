import React from 'react';
import { connect } from 'react-redux';
import { fetchPinstoboards, deletePinstoboard, createPinstoboard } from '../../actions/pinstoboard_actions';
import { fetchBoards } from '../../actions/board_actions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class SaveDrop extends React.Component {
    constructor() {
        super();
        this.state = { showMenu: false };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
     
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    showMenu(e) {
        e.preventDefault();
        this.state.showMenu ? this.setState({ showMenu: false }) : this.setState({ showMenu: true })
    }

    closeMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: false })
    }



    render() {
        const dropMenu = () => {
            let usersBoard = this.props.boards.filter(board => board.user_id === this.props.currentUser.id)

            return(
                <div className="save-drop-background" onClick={this.closeMenu}>
                    <div className="save-drop">
                        {
                            usersBoard.map(board => <div key={board.id} onClick={() => this.props.createPinstoboard({ pin_id: this.props.ptb, board_id: board.id })}>{board.name}</div>)
                        }
                    </div>
                </div>
            )
        }

       
        return (
            <div>
                <div className="drop-icon" onClick={this.showMenu}><ExpandMoreIcon /></div>
                <button className="save-button" onClick={e => e.stopPropagation()}>UnSave</button>
                {this.state.showMenu ? dropMenu() : null }
            </div>
        )
    }
};

const mSTP = state => {
    return({
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards)
    })
}

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
    deletePinstoboard: pinstoboard => dispatch(deletePinstoboard(pinstoboard)),
    createPinstoboard: pinstoboard => dispatch(createPinstoboard(pinstoboard)),
});

export default connect(mSTP, mDTP)(SaveDrop);