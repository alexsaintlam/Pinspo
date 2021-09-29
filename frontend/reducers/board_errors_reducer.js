import { RECEIVE_ERRORS, RECEIVE_BOARD } from "../actions/board_actions";
import { CLOSE_MODAL } from '../actions/modal_actions';

const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_BOARD:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};

export default boardErrorsReducer;