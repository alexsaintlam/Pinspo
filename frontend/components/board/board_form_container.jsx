import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mSTP = (state) => ({
    board: {
        name: "",
        description: "",
        public: "true",
        user_id: state.session.id
    },
    formType: 'Create Board',
});

const mDTP = dispatch => ({
    submitBoard: board => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(BoardForm);
