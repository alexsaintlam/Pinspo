import React from 'react';
import { connect } from 'react-redux';
import PinIndex from '../pin/pin_index_container';
import BoardIndex from '../board/board_index_container';

class NonSessionSwitch extends React.Component {
    constructor() {
        super();
        this.state = { showMenu: true };

        this.showPins = this.showPins.bind(this);
        this.showBoard = this.showBoard.bind(this);
    }

    showPins(e) {
        e.preventDefault();
        this.setState({ showMenu: true })
    }

    showBoard(e) {
        e.preventDefault();
        this.setState({ showMenu: false })
    }

    render() {
        const showBoardForm = () => {
            return(
                <div>
                    <BoardIndex />
                </div>
            )
        }

        const showPinsForm = () => {
            return(
                <div>
                    <PinIndex />
                </div>
            )
        }

        return (
          
                <div className="user-body">
                    <div className="user-body-head">
                        <button className="user-created-button" onClick={this.showPins} tabIndex="1">Created</button>
                        <button className="user-saved-button" onClick={this.showBoard} tabIndex="1">Saved</button>
                    </div>
                    {this.state.showMenu ? showPinsForm() : showBoardForm() }
                </div>
                
       
        )
    }
};

export default NonSessionSwitch;

                