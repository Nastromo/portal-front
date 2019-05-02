export const notificationCss = (state = `notification`, action) => {
    switch (action.type) {
        case `SET_NOTIFICATION_CSS`:
            return `notification ${action.css}`

        default: return state;
    }
}

export const notificationText = (state = ``, action) => {
    switch (action.type) {
        case `SET_NOTIFICATION_TEXT`:
            return action.text;

        default: return state;
    }
}