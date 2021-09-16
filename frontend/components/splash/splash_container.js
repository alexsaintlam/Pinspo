import { connect } from 'react-redux';
import Splash from './splash';
import { fetchPins } from '../../actions/pin_actions';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        pins: state.entities.pins
    };
};

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
})

export default connect(mSTP, mDTP)(Splash);