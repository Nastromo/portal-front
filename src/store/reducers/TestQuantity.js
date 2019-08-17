export const testsPrice = (state = 0, action) => {
    switch (action.type) {
        case `SET_PRICE`:
            return action.number;
        default: return state;
    }
}

export const testQty = (state = 0, action) => {
    switch (action.type) {
        case `SET_QTY`:
            return action.number;
        default: return state;
    }
}

export const gwmValue = (state = 1, action) => {
    switch (action.type) {
        case `SET_GWM`:
            return action.number;
        default: return state;
    }
}

export const ndValue = (state = 1, action) => {
    switch (action.type) {
        case `SET_ND`:
            return action.number;
        default: return state;
    }
}

export const vdValue = (state = 1, action) => {
    switch (action.type) {
        case `SET_VD`:
            return action.number;
        default: return state;
    }
}

export const idefValue = (state = 1, action) => {
    switch (action.type) {
        case `SET_IDEF`:
            return action.number;
        default: return state;
    }
}

export const vaValue = (state = 1, action) => {
    switch (action.type) {
        case `SET_VA`:
            return action.number;
        default: return state;
    }
}

export const b12Value = (state = 1, action) => {
    switch (action.type) {
        case `SET_B12`:
            return action.number;
        default: return state;
    }
}