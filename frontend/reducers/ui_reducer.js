import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import followModalReducer from './follow_modal_reducer';
import boardModalReducer from './board_modal_reducer';
import saveModalReducer from './save_modal_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    followModal: followModalReducer,
    saveModal: saveModalReducer,
    boardModal: boardModalReducer
})

export default uiReducer;