import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardForm from './board_form';

const mSTP = ({entities: { boards }}) => ({
    board: {
        name: "",
        description: "",
        public: ""
    },
    formType: 'Create Board'
})

const mDTP = dispatch => ({
    submitBoard: board => dispatch(createBoard(board))
})

export default connect(mSTP, mDTP)(BoardForm);
