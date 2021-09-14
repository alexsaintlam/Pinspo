import React from 'react';
import { closeSaveModal } from '../../actions/save_modal_actions';
import { connect } from 'react-redux';

class SaveModal extends React.Component {
    componentDidMount() {
        this.props.fetchFollows();
    }

    render() {
        const {followModal, closeFollowModal} = this.props;

        if (!followModal) {
            return null;
        }

        let component;
        switch (followModal) {
            case 'following':
                component = <FollowerIndex profileId={this.props.profileId} session={this.props.session}/>;
                break;
            case 'followers':
                component = <FollowIndex profileId={this.props.profileId} session={this.props.session}/>;
                break;
            default:
                return null;
        }
        
        return (
            <div className="modal-background" onClick={closeFollowModal}>
                <div className="follow-modal" onClick={e => e.stopPropagation()}>
                    { component }
                </div>
            </div>
        );
    }
};

const mSTP = state => {
    return {
        saveModal: state.ui.saveModal,
    };
};

const mDTP = dispatch => {
    return {
        fetchFollows: () => dispatch(fetchFollows()),
        closeFollowModal: () => dispatch(closeFollowModal())
    };
};

export default connect(mSTP, mDTP)(FollowModal);
