import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = userId => ({
    type: RECEIVE_USER,
    userId
});

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);