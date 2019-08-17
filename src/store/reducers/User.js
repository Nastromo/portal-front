export const userLoading = (state = true, action) => {
    switch (action.type) {
        case `USER_LOADING`:
            return action.bool;

        default: return state;
    }
}

export const user = (state = {}, action) => {
    switch (action.type) {
        case `SET_USER`:
            return action.obj;

        default: return state;
    }
}

export const dob = (state = "", action) => {
    switch (action.type) {
        case `CHANGE_DOB`:
            return action.text;

        default: return state;
    }
}