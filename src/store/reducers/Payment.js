export const payment = (state = false, action) => {
    if (action.type === `PAYMENT_OK`) {
        return action.bool
    } else {
        return state;
    }
}

export const paymentError = (state = ``, action) => {
    if (action.type === `PAYMENT_ERROR`) {
        return action.errorText
    } else {
        return state;
    }
}

export const paymentData = (state = {}, action) => {
    if (action.type === `SET_PAYMENT_SUCCESS`) {
        return action.data
    } else {
        return state;
    }
}