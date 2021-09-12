import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import followModalReducer from './follow_modal_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    followModal: followModalReducer
})

export default uiReducer;