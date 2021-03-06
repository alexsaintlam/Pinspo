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
        const { currentUser, boards, ptbs, ptb, pins, createPinstoboard, deletePinstoboard } = this.props;
        if (!pins) return null;

        const dropMenu = () => {
            let usersBoards = boards.filter(board => board.user_id === currentUser.id)
            let pinBoards = ptbs.filter(pinBoard => ptb.pin_id === pinBoard.pin_id)
            let ptbsArr = Object.values(ptbs);
            
            const saveStatus = (board) => {
                for (let i = 0; i < pinBoards.length; i++) {
                    let pinBoard = pinBoards[i];
                   
                    if (pinBoard.board_id === board.id) {
                        return (
                            <div key={board.id} className="save-item-save">
                                <div className="save-avatar"><img className="save-avatar-img" src={pins[ptb.pin_id].photoUrl}/></div>
                                <div onClick={() => deletePinstoboard(pinBoard.id)}>{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="save-inner-unsave">Unsave</button>
                            </div>
                            )
                    }
                }

                let pinObj;
                for (let i = 0; i < ptbsArr.length; i++) {
                    if (ptbsArr[i].board_id === board.id) {
                        pinObj = ptbsArr[i];
                        return (
                            <div key={board.id} className="save-item-save" onClick={() => createPinstoboard({pin_id: ptb.pin_id, board_id: board.id})}>
                                <div className="save-avatar"><img className="save-avatar-img" src={pins[pinObj.pin_id].photoUrl} /></div>
                                <div>{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="save-inner-button">Save</button>
                            </div>
                        )
                    }
                }

                
                return (<div key={board.id} className="save-item-save" onClick={() => createPinstoboard({pin_id: ptb.pin_id, board_id: board.id})}>
                    <div className="save-avatar"></div>
                    <div>{board.name}</div>
                    <div className="nav-fil"></div>
                    <button className="save-inner-button">Save</button>
                </div>)
            }
    
            return(
                    <div key={ptb.id} className="save-drop-menu">
                        <div className="save-menu-header">Save</div>
                        <div className="save-menu-body">
                            <div className="save-allboards">All boards</div>
                            <div className="save-menu-item-container">
                                <div className="save-menu-items">
                                    { usersBoards.map((board) => saveStatus(board)) }
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }

        return (
            <div key={ptb.id} className="save-drop">
                <div className="save-drop-container">
                    <div className="save-drop-sub" onClick={this.showMenu}>
                        <div className="save-sub-title">Choose board</div>
                        <div className="save-drop-header"><ExpandMoreIcon /></div>
                        <button className="save-button">Save</button>
                    </div>
                </div>
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