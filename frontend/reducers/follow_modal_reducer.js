import { OPEN_FOLLOW_MODAL, CLOSE_FOLLOW_MODAL } from '../actions/follow_modal_actions';

const followModalReducer = (state = null, action) => {
    Object.freeze(state);
    switch(action.type) {
        case OPEN_FOLLOW_MODAL:
            return action.followModal;
        case CLOSE_FOLLOW_MODAL:
            return null;
        default:
            return state;
    };
};

export default followModalReducer;