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
                        <img src={pins[477].photoUrl} />
                        <img src={pins[468].photoUrl} />
                        <img src={pins[469].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[470].photoUrl} />
                        <img src={pins[471].photoUrl} />
                        <img src={pins[472].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[473].photoUrl} />
                        <img src={pins[474].photoUrl} />
                        <img src={pins[475].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[476].photoUrl} />
                        <img src={pins[467].photoUrl} />
                        <img src={pins[468].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[469].photoUrl} />
                        <img src={pins[470].photoUrl} />
                        <img src={pins[471].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[472].photoUrl} />
                        <img src={pins[473].photoUrl} />
                        <img src={pins[474].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[475].photoUrl} />
                        <img src={pins[476].photoUrl} />
                        <img src={pins[477].photoUrl} />
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