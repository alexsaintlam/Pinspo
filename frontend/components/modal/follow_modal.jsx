import React from 'react';
import { closeFollowModal } from '../../actions/follow_modal_actions';
import { fetchFollows } from '../../actions/follow_actions';
import { connect } from 'react-redux';
import FollowIndex from '../follow/follow_index_container';
import FollowerIndex from '../follow/follower_index_container';

class FollowModal extends React.Component {
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
        followModal: state.ui.followModal,
    };
};

const mDTP = dispatch => {
    return {
        fetchFollows: () => dispatch(fetchFollows()),
        closeFollowModal: () => dispatch(closeFollowModal())
    };
};

export default connect(mSTP, mDTP)(FollowModal);
