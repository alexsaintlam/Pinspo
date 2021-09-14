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
        this.props.fetchPinstoboards();
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
        const { currentUser, boards, ptbs, ptb, createPinstoboard, deletePinstoboard } = this.props;
        const dropMenu = () => {
            let usersBoards = boards.filter(board => board.user_id === currentUser.id)
            let pinBoards = ptbs.filter(pinBoard => ptb.pin_id === pinBoard.pin_id)
 
            const saveStatus = (board, index) => {
                for (let i = 0; i < pinBoards.length; i++) {
                    let pinBoard = pinBoards[i];
                   
                    if (pinBoard.board_id === board.id) {
                        console.log(pinBoard)
                        return (
                            <div className="save-item-save">
                                <div className="save-avatar"></div>
                                <div onClick={() => deletePinstoboard(pinBoard.id)}>{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="save-inner-unsave">Unsave</button>
                            </div>
                            )
                    }
                }
               
                return (
                    <div className="save-item-save">
                        <div className="save-avatar"></div>
                        <div onClick={() => createPinstoboard({pin_id: ptb.pin_id, board_id: board.id})}>{board.name}</div>
                        <div className="nav-fil"></div>
                        <button className="save-inner-button">Save</button>
                    </div>
                    )
            }
    
            return(
                
                    <div className="save-drop-menu">
                        <div className="save-menu-header">Save</div>
                        <div className="save-menu-body">
                            <div className="save-allboards">All boards</div>
                            <div className="save-menu-item-container">
                                <div className="save-menu-items">
                                    { usersBoards.map((board, i) => saveStatus(board, i)) }
                                </div>
                            </div>
                        </div>
                    </div>
               
            )
        }

        return (
                <div className="save-drop-container">
                    <div className="save-drop-sub" onClick={this.showMenu}>
                        <div className="save-sub-title">Choose board</div>
                        <div className="save-drop-header"><ExpandMoreIcon /></div>
                    </div>
                    <button className="save-button">Save</button>
                    {this.state.showMenu ? dropMenu() : null }
                </div>
        )
    }
};

const mSTP = state => {
    return({
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards),
        ptbs: Object.values(state.entities.pinstoboards)
    })
}

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
    deletePinstoboard: pinstoboardId => dispatch(deletePinstoboard(pinstoboardId)),
    createPinstoboard: pinstoboard => dispatch(createPinstoboard(pinstoboard)),
});

export default connect(mSTP, mDTP)(SaveDrop);