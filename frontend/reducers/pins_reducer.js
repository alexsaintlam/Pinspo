import {
    RECEIVE_PINS,
    RECEIVE_PIN,
    REMOVE_PIN
} from '../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_PINS:
            let pinArr = Object.values(action.pins);
            pinArr.forEach(pin => {
                nextState[pin.id] = pin;
            });
            return nextState;
        case RECEIVE_PIN:
            nextState[action.pin.id] = action.pin
            return nextState;
        case REMOVE_PIN:
            delete nextState[action.pin.id];
            return nextState;
        default:
            return state;
    }
};

export default pinsReducer;