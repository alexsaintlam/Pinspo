import {
    RECEIVE_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/follow_actions';

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FOLLOWS:
            let followArr = Object.values(action.follows);
            followArr.forEach(follow => {
                nextState[follow.id] = follow;
            });
            return nextState;
        case RECEIVE_FOLLOW:
            nextState[action.follow.id] = action.follow
            return nextState;
        case REMOVE_FOLLOW:
            delete nextState[action.follow.id];
            return nextState;
        default:
            return state;
    }
};

export default followsReducer;