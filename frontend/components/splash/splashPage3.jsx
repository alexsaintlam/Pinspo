import React from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';

class SplashPage3 extends React.Component {

    render() {
        const { pins } = this.props;
        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;

        return (
            <div className="splash-body">
                <h2 className="splash3-h2">new best friend</h2>
                <div className="splash-house">
                    <div className="splash-container1">
                        <img src={pins[11].photoUrl} />
                        <img src={pins[12].photoUrl} />
                        <img src={pins[13].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[14].photoUrl} />
                        <img src={pins[15].photoUrl} />
                        <img src={pins[16].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[17].photoUrl} />
                        <img src={pins[18].photoUrl} />
                        <img src={pins[19].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[20].photoUrl} />
                        <img src={pins[51].photoUrl} />
                        <img src={pins[52].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[53].photoUrl} />
                        <img src={pins[54].photoUrl} />
                        <img src={pins[55].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[56].photoUrl} />
                        <img src={pins[57].photoUrl} />
                        <img src={pins[58].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[59].photoUrl} />
                        <img src={pins[60].photoUrl} />
                        <img src={pins[11].photoUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
})

export default connect(null, mDTP)(SplashPage3);