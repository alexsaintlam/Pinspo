import React from 'react';
import { connect } from 'react-redux';
import { fetchPin, updatePin } from '../../actions/pin_actions';
import PinForm from './pin_form';

class EditPinForm extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
    }

    render () {
        const { pin, formType, submitPin } = this.props;

        if (!pin) return null;
        return (
            <PinForm
                pin={pin}
                formType={formType}
                submitPin={submitPin} />
        );
    }
}

const mSTP = ({entities: {pins}}, ownProps) => ({
    pin: pins[ownProps.match.params.pinId],
    formType: 'Update Pin'
})

const mDTP = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    submitPin: pin => dispatch(updatePin(pin))
})

export default connect(mSTP, mDTP)(EditPinForm);