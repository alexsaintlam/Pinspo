import React from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            age: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.classError = this.classError.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
        window.location.replace('#/')
    }

    renderErrors(errorType) {
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    if (error.split(" ")[0] === errorType) {
                        return (<li className="error-message" key={`error-${i}`}>
                        {error}
                        </li>)
                    }
                    
                })}
            </ul>
        );
    }

    classError(errorType) {
        for (let i = 0; i < this.props.errors.length; i++) {
            let error = this.props.errors[i];
            if (error.split(" ")[0] === errorType || error.split(" ")[0] === "Invalid") {
                return "modal-input-error"
            }
        }

        return "modal-input"
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { username: "DemoUser", password: "demo123" }
        this.setState(demoUser);
        this.props.processForm(demoUser).then(this.props.closeModal);
    }

    render() {
        const signupForm = () => {
            return (
                <div>
                    <div className={this.classError("Email")}>
                        <input type='text'
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='login-input'
                        />
                    </div>
                    {this.renderErrors("Email")}
                    <div className={this.classError("Age")}>
                        <input type='text'
                            placeholder="Age"
                            value={this.state.age}
                            onChange={this.update('age')}
                            className='login-input'
                        />
                    </div>
                    {this.renderErrors("Age")}
                </div>
            )
        }

        const demoSignUp = () => {
            return (
                <button onClick={(e) => this.handleDemoUser(e)} className="modal-demo-button">Log In as Demo User</button>
            )
        }

        let typePassword = 'Password';
        this.props.formType === 'signup' ? typePassword = 'Create a password' : typePassword = 'Password';

        

        return (
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className='login-form-box'>
                        <div className="modal-icon"><PinterestIcon style={{ fontSize: 37 }}/></div>
                        <div className="modal-head">Welcome to Pinterest</div>
                        {this.props.formType === 'signup' ? 
                            <div>Find new ideas to try</div> : null}
                        <div onClick={this.props.closeModal} className="close-x"><CloseRoundedIcon /></div>
                        <div className='login-form'>
                            <div className={this.classError("Username")}>
                                <input type='text'
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className='login-input'
                                />
                            </div>
                            {this.renderErrors("Invalid")}
                            {this.renderErrors("Username")}
                            <div className={this.classError("Password")}>
                                <input type='password'
                                    placeholder={typePassword}
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className='login-input'
                                />
                            </div>
                            {this.renderErrors("Password")}
                            {this.props.formType === 'signup' ? signupForm() : null}
                            <br/>
                            <input className='modal-login-button' type='submit' value={this.props.formType === 'signup' ? 'Sign Up' : 'Log In'} />
                            {this.props.formType === 'login' ? demoSignUp() : null}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;