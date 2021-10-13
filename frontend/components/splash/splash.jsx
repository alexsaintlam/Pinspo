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
            firstLanding: false,
            buttonPage: <SplashPage1 pins={this.props.pins}/>,
            num: 0,
            intervalState: 0
        };
        this.setButton1 = this.setButton1.bind(this);
        this.setButton2 = this.setButton2.bind(this);
        this.setButton3 = this.setButton3.bind(this);
        this.setButton4 = this.setButton4.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchPins();
        let i = 1;
        let interVar = setInterval(() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    num: prevState.num = i,
                };
            });
            i === 3 ? i = 0 : i++
        }, 6000 );

        this.setState(prevState => {
            return {
                ...prevState,
                intervalState: interVar,
            };
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalState)
    }

    setButton1(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage1 pins={this.props.pins} />, firstLanding: true});
    }

    setButton2(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage2 pins={this.props.pins} />, firstLanding: true});
    }

    setButton3(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage3 pins={this.props.pins} />, firstLanding: true});
    }

    setButton4(e) {
        e.preventDefault();
        this.setState({buttonPage: <SplashPage4 pins={this.props.pins} />, firstLanding: true});
    }

    render() {
        const { pins } = this.props;
        
        if (Object.values(pins).length < 1) return null;
        if (!pins) return null;
        let defaultButton;

        if (!this.state.firstLanding) {
            let splashArr = [<SplashPage1 pins={this.props.pins} />, <SplashPage2 pins={this.props.pins} />, <SplashPage3 pins={this.props.pins} />, <SplashPage4 pins={this.props.pins} />]
            defaultButton = splashArr[this.state.num];
        } else {
            defaultButton = this.state.buttonPage
        }

        let classNameVar1;
        if (this.state.num === 0 && this.state.firstLanding === false) {
            classNameVar1 = "circle-button-auto-1"
        } else {
            classNameVar1 = "circle-button1"
        }

        let classNameVar2;
        if (this.state.num === 2 && this.state.firstLanding === false) {
            classNameVar2 = "circle-button-auto-2"
        } else {
            classNameVar2 = "circle-button2"
        }

        let classNameVar3;
        if (this.state.num === 1 && this.state.firstLanding === false) {
            classNameVar3 = "circle-button-auto-3"
        } else {
            classNameVar3 = "circle-button3"
        }

        let classNameVar4;
        if (this.state.num === 3 && this.state.firstLanding === false) {
            classNameVar4 = "circle-button-auto-4"
        } else {
            classNameVar4 = "circle-button4"
        }

        const signedOutSplash = () => (
            <div>
                <div className="splash-body">
                    <h1>Get your next</h1>
                    <div className="circle-button-cont">
                        <div onClick={this.setButton1} className={classNameVar1} tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                        <div onClick={this.setButton3} className={classNameVar3} tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                        <div onClick={this.setButton2} className={classNameVar2} tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                        <div onClick={this.setButton4} className={classNameVar4} tabIndex="1">
                            <FiberManualRecordIcon fontSize="small" />
                        </div>
                    </div>
                    {defaultButton}
                    <div className="bottom-gradient"></div>
                </div>
            </div>
        )
    
        return this.props.currentUser ? null : signedOutSplash();
    }
}

export default Splash;