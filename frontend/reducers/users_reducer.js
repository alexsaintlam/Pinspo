import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;