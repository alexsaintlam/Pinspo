import React from 'react';
import SplashPage1 from './splashPage1';
import SplashPage2 from './splashPage2';
import SplashPage3 from './splashPage3';
import SplashPage4 from './splashPage4';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonPage: <SplashPage1 pins={this.props.pins}/>
        };
        this.setButton1 = this.setButton1.bind(this);
        this.setButton2 = this.setButton2.bind(this);
        this.setButton3 = this.setButton3.bind(this);
        this.setButton4 = this.setButton4.bind(this);
    }

    componentDidMount() {
        this.props.fetchPins();
    }

    setButton1(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage1 pins={this.props.pins} />});
    }

    setButton2(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage2 pins={this.props.pins} />});
    }

    setButton3(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage3 pins={this.props.pins} />});
    }

    setButton4(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage4 pins={this.props.pins} />});
    }

    render() {
        const { pins } = this.props;
  
        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;

        const signedOutSplash = () => (
            <div>
                <div className="splash-body">
                    <h1>Get your next</h1>
                    <div className="circle-button-cont">
                        <div onClick={this.setButton1} className="circle-button1" tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                        <div onClick={this.setButton2} className="circle-button2" tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                        <div onClick={this.setButton3} className="circle-button3" tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                        <div onClick={this.setButton4} className="circle-button4" tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                    </div>
                    {this.state.buttonPage}
                    <div className="bottom-gradient"></div>
                </div>
            </div>
        )
    
        return this.props.currentUser ? null : signedOutSplash();
    }
}

export default Splash;