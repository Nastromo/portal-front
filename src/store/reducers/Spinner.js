export const loginSpinner = (state = false, action) => {
    switch (action.type) {
        case `SHOW_LOGIN_SPINNER`:
            return action.bool;

        default: return state;
    }
}

export const instrumSpinner = (state = false, action) => {
    switch (action.type) {
        case `SHOW_INSTRUMENT_SPINNER`:
            return action.bool;

        default: return state;
    }
}

export const saveSpinner = (state = false, action) => {
    switch (action.type) {
        case `SHOW_SAVE_SPINNER`:
            return action.bool;

        default: return state;
    }
}

export const submitSpinner = (state = false, action) => {
    switch (action.type) {
        case `SHOW_SUBMIT_SPINNER`:
            return action.bool;

        default: return state;
    }
}

export const cancelSpinner = (state = false, action) => {
    switch (action.type) {
        case `SHOW_CANCEL_SPINNER`:
            return action.bool;

        default: return state;
    }
}

export const deleteSpinner = (state = false, action) => {
    switch (action.type) {
        case `SHOW_DELETE_SPINNER`:
            return action.bool;

        default: return state;
    }
}