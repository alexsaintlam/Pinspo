import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';

const mSTP = ({entities: {pins}}, ownProps) => ({
    pin: pins[ownProps.match.params.pinId]
})

const mDTP = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId))
})

export default connect(mSTP, mDTP)(PinShow)
