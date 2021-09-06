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
        const demoUser = { username: "demoUser", password: "demo123" }
        this.setState(demoUser);
        this.props.processForm(demoUser).then(this.props.closeModal);
    }

    render() {
        const signupForm = () => {
            return (
                <div>
                    <label>Email:
                        <input type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='login-input'
                        />
                    </label>
                    <br/>
                    <label>Age:
                        <input type='text'
                            value={this.state.age}
                            onChange={this.update('age')}
                            className='login-input'
                        />
                    </label>
                    <br/>
                </div>
            )
        }

        const demoSignUp = () => {
            return (
                <button onClick={(e) => this.handleDemoUser(e)} className="modal-demo-button">Log In as Demo User</button>
            )
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <div className="modal-icon"><PinterestIcon /></div>
                    <div className="modal-head">Welcome to Pinterest</div>
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
                        {this.props.formType === 'signup' ? signupForm() : null}
                        <div className="modal-input">
                            <input type='password'
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className='login-input'
                            />
                        </div>
                        <br/>
                        <input className='modal-login-button' type='submit' value={this.props.formType} />
                        {this.props.formType === 'login' ? demoSignUp() : null}
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;