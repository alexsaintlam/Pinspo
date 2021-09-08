import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.submitBoard(this.state);
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
                <label>Name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}>
                    </input>
                </label>
                <label>Description:
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.update('description')}>
                    </input>
                </label>
                <label>Public:
                    <input
                        type="text"
                        value={this.state.public}
                        onChange={this.update('public')}>
                    </input>
                </label>
                <input type="submit" value={this.props.formType}></input>
            </form>
        )
    }
}

export default BoardForm;