import React from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';

class SplashPage3 extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPins();
    // }

    render() {
        const { pins } = this.props;
        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;

        return (
            <div className="splash-body">
                <h2 className="splash3-h2">new best friend</h2>
                <div className="splash-house">
                    <div className="splash-container1">
                        <img src={pins[448].photoUrl} />
                        <img src={pins[454].photoUrl} />
                        <img src={pins[450].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[451].photoUrl} />
                        <img src={pins[452].photoUrl} />
                        <img src={pins[453].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[449].photoUrl} />
                        <img src={pins[455].photoUrl} />
                        <img src={pins[456].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[490].photoUrl} />
                        <img src={pins[492].photoUrl} />
                        <img src={pins[488].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[489].photoUrl} />
                        <img src={pins[457].photoUrl} />
                        <img src={pins[491].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[494].photoUrl} />
                        <img src={pins[493].photoUrl} />
                        <img src={pins[497].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[495].photoUrl} />
                        <img src={pins[496].photoUrl} />
                        <img src={pins[448].photoUrl} />
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