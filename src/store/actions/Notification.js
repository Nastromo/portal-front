export const setText = (text) => ({
    type: 'SET_NOTIFICATION_TEXT',
    text
});

export const setCssClass = (css) => ({
    type: 'SET_NOTIFICATION_CSS',
    css
});

export const showNotification = (text, css) => {
    return async (dispatch, getState) => {
        dispatch(setText(text));
        dispatch(setCssClass(css))
    }
};
