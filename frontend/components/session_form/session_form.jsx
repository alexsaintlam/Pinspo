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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
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
                <div className="modal-input">
                    <input type='text'
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className='login-input'
                    />
                </div>
                <div className="modal-input">
                    <input type='text'
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.update('age')}
                        className='login-input'
                    />
                </div>
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
                        {this.renderErrors()}
                        <div className='login-form'>
                            <div className="modal-input">
                                <input type='text'
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className='login-input'
                                />
                            </div>
                            <div className="modal-input">
                                <input type='password'
                                    placeholder={typePassword}
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className='login-input'
                                />
                            </div>
                            {this.props.formType === 'signup' ? signupForm() : null}
                            <br/>
                            <input className='modal-login-button' type='submit' value={this.props.formType} />
                            {this.props.formType === 'login' ? demoSignUp() : null}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;