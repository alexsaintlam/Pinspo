import React from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';

class SplashPage4 extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPins();
    // }

    render() {
        const { pins } = this.props;
        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;

        return (
            <div className="splash-body">
                <h2 className="splash4-h2">outdoor activity idea</h2>
                <div className="splash-house">
                    <div className="splash-container1">
                        <img src={pins[31].photoUrl} />
                        <img src={pins[32].photoUrl} />
                        <img src={pins[33].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[34].photoUrl} />
                        <img src={pins[35].photoUrl} />
                        <img src={pins[36].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[37].photoUrl} />
                        <img src={pins[38].photoUrl} />
                        <img src={pins[39].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[40].photoUrl} />
                        <img src={pins[31].photoUrl} />
                        <img src={pins[32].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[33].photoUrl} />
                        <img src={pins[34].photoUrl} />
                        <img src={pins[35].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[36].photoUrl} />
                        <img src={pins[37].photoUrl} />
                        <img src={pins[38].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[39].photoUrl} />
                        <img src={pins[40].photoUrl} />
                        <img src={pins[31].photoUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
})

export default connect(null, mDTP)(SplashPage4);