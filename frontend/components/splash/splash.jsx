import React from 'react';
import SplashPage1 from './splashPage1';
import SplashPage2 from './splashPage2';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPage: <SplashPage1 />
        };
        this.setButton = this.setButton.bind(this);
    }

    setButton(page) {
        const buttonPage = page;
        this.setState(buttonPage);
    }

    render() {
        const signedOutSplash = () => (
            <div className="splash-body">
                <h1>Get your next</h1>
                <h2>outdoor traveling idea</h2>
                <div className="circle-button-cont">
                    <div onClick={this.setButton(<SplashPage1 />)} className="circle-button1">
                        <FiberManualRecordIcon fontSize="small" />
                    </div>
                    <div onClick={this.setButton(<SplashPage2 />)} className="circle-button1">
                        <FiberManualRecordIcon fontSize="small" />
                    </div>
                </div>
                {this.state.buttonPage}
                <div className="bottom-gradient"></div>
            </div>
        )
    
        return this.props.currentUser ? null : signedOutSplash();
    }
}

export default Splash;