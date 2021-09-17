import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.pin.title,
            description: this.props.pin.description,
            organized: true,
            user_id: this.props.user.id,
            photoFile: null,
            photoUrl: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[user_id]', this.state.user_id);
        formData.append('pin[organized]', this.state.organized);

        if (this.state.photoFile) {
            formData.append('pin[photo]', this.state.photoFile);
        }
       
        this.props.submitPin(formData);
        window.history.back();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleFile(e) {
        e.preventDefault();
        this.setState({ photoFile: e.currentTarget.files[0] })
        
    }

    render() {
        const { user } = this.props;

        return(
        <div className="create-background">
            <div className="create-container">
                <div className="create-body">
                        <div className="create-left">
                            <div className="upload-container">
                                <div className="upload-body">
                                    <input type="file" onChange={this.handleFile} />
                                    <div className="upload-icon">
                                        <CloudUploadIcon style={{ fontSize: 40 }}/>
                                    </div>
                                    <div className="upload-center-text">
                                        Click to upload
                                    </div>
                                    <div className="upload-footer">Recommendation: Use high-quality .jpg files less than 20MB</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="create-right">
                            <div className="create-form">
                                <form onSubmit={this.handleSubmit} >
                                    <div className="class-title">
                                        <input
                                            className="class-title-input"
                                            type="text"
                                            placeholder="Add your title"
                                            value={this.state.title}
                                            onChange={this.update('title')}>
                                        </input>
                                        <div className="create-line"></div>
                                        <div className="create-message">
                                            Your first 40 characters are usually what show up in feeds
                                        </div>
                                    </div>
                                        <div className="create-user-container">
                                            <div className="create-avatar"><img src={user.photoUrl} /></div>
                                            <div className="create-username">{user.username}</div>
                                        </div>
                                    <div className="create-desc">
                                        <input
                                            className="create-desc-input"
                                            type="text"
                                            placeholder="Tell everyone what your pin is about"
                                            value={this.state.description}
                                            onChange={this.update('description')}>
                                        </input>
                                        <div className="create-line"></div>
                                        <div className="create-message">
                                            People will usually see the first 50 characters when they click on your Pin
                                        </div>
                                    </div>  
                                    <input className="create-button" type="submit" value={this.props.formType}></input>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PinForm;