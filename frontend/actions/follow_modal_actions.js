export const OPEN_FOLLOW_MODAL = 'OPEN_FOLLOW_MODAL';
export const CLOSE_FOLLOW_MODAL = 'CLOSE_FOLLOW_MODAL';

export const openFollowModal = followModal => {
    return {
        type: OPEN_FOLLOW_MODAL,
        followModal
    };
};

export const closeFollowModal = () => {
    return {
        type: CLOSE_FOLLOW_MODAL,
    };
};

