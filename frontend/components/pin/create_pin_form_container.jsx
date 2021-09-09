import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinForm from './pin_form';

const mSTP = (state) => ({
    pin: {
        title: "",
        description: "",
        organized: "",
        user_id: state.session.id
    },
    formType: 'Create Pin'
})

const mDTP = dispatch => ({
    submitPin: pin => dispatch(createPin(pin))
})

export default connect(mSTP, mDTP)(PinForm);
