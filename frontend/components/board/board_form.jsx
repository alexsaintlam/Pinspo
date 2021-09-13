import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitBoard(this.state).then(this.props.closeModal);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
       
        return(
                <div className="board-create" onClick={e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <div className="board-title-container">
                                <div className="board-create-title">Create board</div>
                            </div>
                            <div className="board-body-inputs">
                                <div className="board-label-name">Name:</div>
                                <input className="board-input-name"
                                    type="text"
                                    placeholder={"Like \"Places to Go\" or \"Recipes to Make\""}
                                    value={this.state.name}
                                    onChange={this.update('name')}>
                                </input>
                                <div className="nav-fil"></div>
                                <div className="board-public-container">
                                    <input className="board-public-check"
                                        type="checkbox"
                                        value={false}
                                        name={this.state.public}
                                        onChange={this.update('public')}>
                                    </input>
                                    <div className="board-label-container">
                                        <div className="board-label-desc">Keep this board secret</div>
                                        <div className="board-label-lower-desc-contain">
                                            <div className="board-lower-desc1">So only you and collaborators can see it.</div>
                                            <div className="board-lower-desc2">Learn more</div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="create-button-contnainer">
                                <button className="board-create-button" type="submit" value={this.props.formType}>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}

export default BoardForm;