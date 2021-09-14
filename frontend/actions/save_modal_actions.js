export const OPEN_SAVE_MODAL = 'OPEN_SAVE_MODAL';
export const CLOSE_SAVE_MODAL = 'CLOSE_SAVE_MODAL';

export const openSaveModal = saveModal => {
    return {
        type: OPEN_SAVE_MODAL,
        saveModal
    };
};

export const closeSaveModal = () => {
    return {
        type: CLOSE_SAVE_MODAL,
    };
};

