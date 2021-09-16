import React from 'react';

class SplashPage1 extends React.Component {
    render() {
        const { pins } = this.props;

        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;

        return (
            <div className="splash-body">
                <h2 className="splash1-h2">outdoor traveling idea</h2>
                <div className="splash-house">
                    <div className="splash-container1">
                        <img src={pins[318].photoUrl} />
                        <img src={pins[320].photoUrl} />
                        <img src={pins[319].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[367].photoUrl} />
                        <img src={pins[322].photoUrl} />
                        <img src={pins[359].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[324].photoUrl} />
                        <img src={pins[325].photoUrl} />
                        <img src={pins[326].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[327].photoUrl} />
                        <img src={pins[358].photoUrl} />
                        <img src={pins[323].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[360].photoUrl} />
                        <img src={pins[361].photoUrl} />
                        <img src={pins[362].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[363].photoUrl} />
                        <img src={pins[364].photoUrl} />
                        <img src={pins[365].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[366].photoUrl} />
                        <img src={pins[321].photoUrl} />
                        <img src={pins[318].photoUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashPage1;