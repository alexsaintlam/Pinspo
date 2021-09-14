export const fetchPinstoboards = () => (
    $.ajax({
        url: '/api/pinstoboards',
        method: 'GET'
    })
);

export const createPinstoboard = pinstoboard => (
    $.ajax({
        url: '/api/pinstoboards/',
        method: 'POST',
        data: { pinstoboard }
    })
);

export const deletePinstoboard = pinstoboard => (
    $.ajax({
        url: `/api/pinstoboards/${pinstoboard.id}`,
        method: 'DELETE'
    })
);