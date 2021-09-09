import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

export const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

export const removePin = pin => ({
    type: REMOVE_PIN,
    pin
});

export const fetchPins = () => dispatch => (
    PinAPIUtil.fetchPins().then(pins => dispatch(receivePins(pins)))
);

export const fetchPin = pinId => dispatch => (
    PinAPIUtil.fetchPin(pinId).then(pin => dispatch(receivePin(pin)))
);

export const createPin = pin => dispatch => (
    PinAPIUtil.createPin(pin).then(createdPin => dispatch(receivePin(createdPin)))
);

export const updatePin = pin => dispatch => (
    PinAPIUtil.updatePin(pin).then(updatedPin => dispatch(receivePin(updatedPin)))
);

export const deletePin = pin => dispatch => (
    PinAPIUtil.deletePin(pin).then(() => dispatch(removePin(pin)))
);
