import React from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';

class SplashPage1 extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPins();
    // }

    render() {
        const { pins } = this.props;
        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;

        return (
            <div className="splash-body">
                <h2 className="splash1-h2">fun traveling idea</h2>
                <div className="splash-house">
                    <div className="splash-container1">
                        <img src={pins[478].photoUrl} />
                        <img src={pins[439].photoUrl} />
                        <img src={pins[440].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[487].photoUrl} />
                        <img src={pins[441].photoUrl} />
                        <img src={pins[438].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[444].photoUrl} />
                        <img src={pins[445].photoUrl} />
                        <img src={pins[446].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[447].photoUrl} />
                        <img src={pins[443].photoUrl} />
                        <img src={pins[479].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[480].photoUrl} />
                        <img src={pins[481].photoUrl} />
                        <img src={pins[482].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[483].photoUrl} />
                        <img src={pins[484].photoUrl} />
                        <img src={pins[485].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[486].photoUrl} />
                        <img src={pins[442].photoUrl} />
                        <img src={pins[438].photoUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
})

export default connect(null, mDTP)(SplashPage1);
