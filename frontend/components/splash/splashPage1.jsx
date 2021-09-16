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
                        <img src={pins[41].photoUrl} />
                        <img src={pins[2].photoUrl} />
                        <img src={pins[3].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[47].photoUrl} />
                        <img src={pins[5].photoUrl} />
                        <img src={pins[6].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[7].photoUrl} />
                        <img src={pins[8].photoUrl} />
                        <img src={pins[4].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[50].photoUrl} />
                        <img src={pins[1].photoUrl} />
                        <img src={pins[42].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[43].photoUrl} />
                        <img src={pins[44].photoUrl} />
                        <img src={pins[45].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[46].photoUrl} />
                        <img src={pins[9].photoUrl} />
                        <img src={pins[48].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[49].photoUrl} />
                        <img src={pins[10].photoUrl} />
                        <img src={pins[1].photoUrl} />
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
