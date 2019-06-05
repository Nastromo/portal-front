export const resultsList = (state = {}, action) => {
    switch (action.type) {
        case `SET_RESULTS`:
            return action.data

        default: return state;
    }
}

export const resultLoading = (state = true, action) => {
    if (action.type === `SET_RESULTS_LOADING`) {
        return action.bool;
    } else {
        return state;
    }
}

export const resultError = (state = false, action) => {
    if (action.type === `SET_RESULTS_ERR`) {
        return action.bool;
    } else {
        return state;
    }
}