import * as PinstoboardAPIUtil from '../util/pinstoboard_api_util';

export const RECEIVE_PINSTOBOARDS = 'RECEIVE_PINSTOBOARDS';
export const RECEIVE_PINSTOBOARD = 'RECEIVE_PINSTOBOARD';
export const REMOVE_PINSTOBOARD = 'REMOVE_PINSTOBOARD';

export const receivePinstoboards = pinstoboards => ({
    type: RECEIVE_PINSTOBOARDS,
    pinstoboards
});

export const receivePinstoboard = pinstoboard => ({
    type: RECEIVE_PINSTOBOARD,
    pinstoboard
});

export const removePinstoboard = pinstoboardId => ({
    type: REMOVE_PINSTOBOARD,
    pinstoboardId
});

export const fetchPinstoboards = () => dispatch => (
    PinstoboardAPIUtil.fetchPinstoboards().then(pinstoboards => dispatch(receivePinstoboards(pinstoboards)))
);

export const createPinstoboard = pinstoboard => dispatch => (
    PinstoboardAPIUtil.createPinstoboard(pinstoboard).then(createdPinstoboard => dispatch(receivePinstoboard(createdPinstoboard)))
);

export const deletePinstoboard = pinstoboardId => dispatch => (
    PinstoboardAPIUtil.deletePinstoboard(pinstoboardId).then(() => dispatch(removePinstoboard(pinstoboardId)))
);
