export const address = (state = ``, action) => {
    switch (action.type) {
        case `SET_ADDRESS`:
            return action.text

        default: return state;
    }
}

export const city = (state = ``, action) => {
    switch (action.type) {
        case `SET_CITY`:
            return action.text

        default: return state;
    }
}

export const state = (state = ``, action) => {
    switch (action.type) {
        case `SET_STATE`:
            return action.text

        default: return state;
    }
}

export const zip = (state = ``, action) => {
    switch (action.type) {
        case `SET_ZIP`:
            return action.text

        default: return state;
    }
}