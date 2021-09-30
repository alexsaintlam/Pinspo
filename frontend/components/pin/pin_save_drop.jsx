import React from 'react';
import { connect } from 'react-redux';
import { fetchPinstoboards, deletePinstoboard, createPinstoboard } from '../../actions/pinstoboard_actions';
import { fetchBoards } from '../../actions/board_actions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class PinSaveDrop extends React.Component {
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
        const { currentUser, boards, ptbs, pin, pins, createPinstoboard, deletePinstoboard } = this.props;
        const dropMenu = () => {
            let usersBoards = boards.filter(board => board.user_id === currentUser.id)
            let pinBoards = ptbs.filter(pinBoard => pin.id === pinBoard.pin_id)
            let ptbsArr = Object.values(ptbs);
 
            const saveStatus = (board) => {
                for (let i = 0; i < pinBoards.length; i++) {
                    let pinBoard = pinBoards[i];
                   
                    if (pinBoard.board_id === board.id) {
                        return (
                            <div key={board.id}className="pin-item-save" onClick={() => deletePinstoboard(pinBoard.id)}>
                                <div className="pin-avatar"><img className="save-avatar-img" src={pin.photoUrl}/></div>
                                <div className="pin-test123">{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="pin-inner-unsave">Unsave</button>
                            </div>
                        )
                    }
                }

                let pinObj;
                for (let i = 0; i < ptbsArr.length; i++) {
                    if (ptbsArr[i].board_id === board.id) {
                        pinObj = ptbsArr[i];
                        return (
                            <div key={board.id} className="pin-item-save" onClick={() => createPinstoboard({pin_id: pin.id, board_id: board.id})}>
                                <div className="pin-avatar"><img className="save-avatar-img" src={pins[pinObj.pin_id].photoUrl} /></div>
                                <div>{board.name}</div>
                                <div className="nav-fil"></div>
                                <button className="pin-inner-button">Save</button>
                            </div>
                        )
                    }
                }

                return (
                    <div key={board.id} className="pin-item-save" onClick={() => createPinstoboard({pin_id: pin.id, board_id: board.id})}>
                        <div className="pin-avatar"></div>
                        <div>{board.name}</div>
                        <div className="nav-fil"></div>
                        <button className="pin-inner-button">Save</button>
                    </div>
                    )
            }
    
            return(
                <div key={pin.id} className="pin-drop-menu">
                    <div className="pin-menu-header">Save</div>
                    <div className="pin-menu-body">
                        <div className="pin-allboards">All boards</div>
                        <div className="pin-menu-item-container">
                            <div className="pin-menu-items">
                                { usersBoards.map((board, i) => saveStatus(board, i)) }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        let ptbsArr = Object.values(ptbs);

        const ptbObj = (pinId, currUser) => (
            ptbsArr.findIndex(function(ptb) {
                return (ptb.unorganized_id === currUser) && (ptb.pin_id === pinId)
            })
        )

        return (
            <div key={pin.id} className="pin-drop-container">
                <div className="pin-drop-sub" onClick={this.showMenu}>
                    <div className="pin-sub-title">Choose board</div>
                    <div className="pin-drop-header"><ExpandMoreIcon /></div>
                </div>
                {ptbsArr[ptbObj(pin.id, currentUser.id)] ? 
                <button className="unsave-button" onClick={() => deletePinstoboard(ptbsArr[ptbObj(pin.id, currentUser.id)].id)}>Unsave</button> :
                <button className="save-button" onClick={() => createPinstoboard({pin_id: pin.id, unorganized_id: currentUser.id})}>Save</button> }
                {this.state.showMenu ? dropMenu() : null }
            </div>
        )
    }
};

const mSTP = state => {
    return({
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards),
        ptbs: Object.values(state.entities.pinstoboards),
        pins: state.entities.pins
    })
}

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPinstoboards: () => dispatch(fetchPinstoboards()),
    deletePinstoboard: pinstoboardId => dispatch(deletePinstoboard(pinstoboardId)),
    createPinstoboard: pinstoboard => dispatch(createPinstoboard(pinstoboard)),
});

export default connect(mSTP, mDTP)(PinSaveDrop);