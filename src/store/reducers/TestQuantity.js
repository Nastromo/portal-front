export const testsPrice = (state = 0, action) => {
    switch (action.type) {
        case `SET_PRICE`:
            return action.number;
        default: return state;
    }
}
