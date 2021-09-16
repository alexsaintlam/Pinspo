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
                        <img src={pins[21].photoUrl} />
                        <img src={pins[22].photoUrl} />
                        <img src={pins[23].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[24].photoUrl} />
                        <img src={pins[25].photoUrl} />
                        <img src={pins[26].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[27].photoUrl} />
                        <img src={pins[28].photoUrl} />
                        <img src={pins[29].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[30].photoUrl} />
                        <img src={pins[61].photoUrl} />
                        <img src={pins[62].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[63].photoUrl} />
                        <img src={pins[64].photoUrl} />
                        <img src={pins[65].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[68].photoUrl} />
                        <img src={pins[67].photoUrl} />
                        <img src={pins[66].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[69].photoUrl} />
                        <img src={pins[70].photoUrl} />
                        <img src={pins[21].photoUrl} />
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