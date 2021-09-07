import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});

export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

export const removeBoard = board => ({
    type: REMOVE_BOARD,
    board
});

export const fetchBoards = () => dispatch => (
    BoardAPIUtil.fetchBoards().then(boards => dispatch(receiveBoards(boards)))
);

export const fetchBoard = boardId => dispatch => (
    BoardAPIUtil.fetchBoard(boardId).then(board => dispatch(receiveBoard(board)))
);

export const createBoard = board => dispatch => (
    BoardAPIUtil.createBoard(board).then(createdBoard => dispatch(receiveBoard(createdBoard)))
);

export const updateBoard = board => dispatch => (
    BoardAPIUtil.updateBoard(board).then(updatedBoard => dispatch(receiveBoard(updatedBoard)))
);

export const deleteBoard = board => dispatch => (
    BoardAPIUtil.deleteBoard(board).then(board => dispatch(removeBoard(board)))
);
