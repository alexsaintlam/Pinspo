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
                        <img src={pins[218].photoUrl} />
                        <img src={pins[219].photoUrl} />
                        <img src={pins[220].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container2">
                        <img src={pins[267].photoUrl} />
                        <img src={pins[222].photoUrl} />
                        <img src={pins[264].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container3">
                        <img src={pins[224].photoUrl} />
                        <img src={pins[225].photoUrl} />
                        <img src={pins[226].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container4">
                        <img src={pins[227].photoUrl} />
                        <img src={pins[258].photoUrl} />
                        <img src={pins[259].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container5">
                        <img src={pins[260].photoUrl} />
                        <img src={pins[261].photoUrl} />
                        <img src={pins[262].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container6">
                        <img src={pins[263].photoUrl} />
                        <img src={pins[223].photoUrl} />
                        <img src={pins[265].photoUrl} />
                    </div>
                </div>
                <div className="splash-house">
                    <div className="splash-container7">
                        <img src={pins[266].photoUrl} />
                        <img src={pins[221].photoUrl} />
                        <img src={pins[218].photoUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashPage1;