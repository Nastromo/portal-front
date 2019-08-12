export const checkbox = (state = {}, action) => {
    if (action.type === `CHECK_BOX`) {
        let newState = JSON.parse(JSON.stringify(state));
        newState[action.obj.id] = action.obj.status;
        return newState;
    }
    return state;
}