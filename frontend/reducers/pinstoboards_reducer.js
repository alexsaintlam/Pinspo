import {
    RECEIVE_PINSTOBOARDS,
    RECEIVE_PINSTOBOARD,
    REMOVE_PINSTOBOARD
} from '../actions/pinstoboard_actions';

const PinstoboardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_PINSTOBOARDS:
            return action.pinstoboards;
        case RECEIVE_PINSTOBOARD:
            nextState[action.pinstoboard.id] = action.pinstoboard
            return nextState;
        case REMOVE_PINSTOBOARD:
            delete nextState[action.pinstoboardId];
            return nextState;
        default:
            return state;
    }
};

export default PinstoboardsReducer;