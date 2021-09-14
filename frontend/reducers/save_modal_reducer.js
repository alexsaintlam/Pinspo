import { OPEN_SAVE_MODAL, CLOSE_SAVE_MODAL } from '../actions/save_modal_actions';

const SaveModalReducer = (state = null, action) => {
    Object.freeze(state);
    switch(action.type) {
        case OPEN_SAVE_MODAL:
            return action.saveModal;
        case CLOSE_SAVE_MODAL:
            return null;
        default:
            return state;
    };
};

export default SaveModalReducer;