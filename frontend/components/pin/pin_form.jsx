import React from 'react';

class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitPin(this.state);
        window.location.replace("#/")
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
                <h2>{this.props.formType}</h2>
                <label>Title:
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}>
                    </input>
                </label>
                <label>Description:
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.update('description')}>
                    </input>
                </label>
                <label>Organized:
                    <input
                        type="text"
                        value={this.state.organized}
                        onChange={this.update('organized')}>
                    </input>
                </label>
                <input type="submit" value={this.props.formType}></input>
            </form>
        )
    }
}

export default PinForm;