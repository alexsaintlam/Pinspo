import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mSTP = (state) => ({
    board: {
        name: "",
        description: "",
        public: "",
        user_id: state.session.id
    },
    formType: 'Create Board',
});

const mDTP = dispatch => ({
    submitBoard: board => dispatch(createBoard(board))
})

export default connect(mSTP, mDTP)(BoardForm);
