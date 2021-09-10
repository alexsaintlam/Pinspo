import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';

const mSTP = (state, ownProps) => {
    return ({
        pin: state.entities.pins[ownProps.match.params.pinId]
    })
    
}

const mDTP = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId))
})

export default connect(mSTP, mDTP)(PinShow)
