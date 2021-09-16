import React from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';

class SplashPage2 extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPins();
    // }

    render() {
        const { pins } = this.props;
        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;

        return (
            <div className="splash-body">
                <h2 className="splash2-h2">food craving idea</h2>
                <div className="splash-house">
                    <div className="splash-container1">
                        <img src={pins[505].photoUrl} />
                        <img src={pins[459].photoUrl} />
                        <img src={pins[460].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[461].photoUrl} />
                        <img src={pins[462].photoUrl} />
                        <img src={pins[463].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[464].photoUrl} />
                        <img src={pins[465].photoUrl} />
                        <img src={pins[466].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[467].photoUrl} />
                        <img src={pins[498].photoUrl} />
                        <img src={pins[499].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[500].photoUrl} />
                        <img src={pins[501].photoUrl} />
                        <img src={pins[502].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[503].photoUrl} />
                        <img src={pins[504].photoUrl} />
                        <img src={pins[458].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[506].photoUrl} />
                        <img src={pins[507].photoUrl} />
                        <img src={pins[458].photoUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
})

export default connect(null, mDTP)(SplashPage2);