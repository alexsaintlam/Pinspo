import React from 'react';
import PinFeedbackForm from './pin_feedback_form'
import PinSaveDrop from './pin_save_drop';
import PinUserShow from './pin_user_container';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() =>{
                this.props.fetchUser(this.props.pin.user_id)
                    .then(() =>{
                        this.props.fetchPins()
                            .then(() =>{
                                this.props.fetchFollows()
                            })
                    })
            })
        
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        window.history.back();
    }

    render() {
        const { pin, users } = this.props;
        if (!pin) return null;
        if (!users) return null;
 
        return(
            <div className="pin-background" onClick={this.handleSubmit}>
                <div className="pin-container">
                    <div className="pin-body" onClick={e => e.stopPropagation()}>
                        <div className="pin-picture">
                            <img src={pin.photoUrl} />
                        </div>
                        <div className="pin-side">
                            <div className="pin-header">
                                <div className='pin-dropdown'>
                                <PinSaveDrop pin={pin}/>
                                </div>
                            </div>
                            <div className="pin-title">{pin.title}</div>
                            <div className="pin-description">{pin.description}</div>
                            <PinUserShow pin={pin} users={users} />
                            <PinFeedbackForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow;