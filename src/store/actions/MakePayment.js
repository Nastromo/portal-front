import API from '../../utils/Api';


const successPayment = (bool) => ({
    type: 'PAYMENT_OK',
    bool
});


const showError = (errorText) => ({
    type: 'PAYMENT_ERROR',
    errorText
});


export const makePayment = (body) => {
    return async (dispatch, getState) => {
        try {
            await API.post('/make-payment', body);
            dispatch(successPayment(true));
        } catch (err) {
            console.log(err);
            if (err.response) {
                switch (err.response.data) {
                    case `Не достаточно средств`:
                        dispatch(showError(`Не достаточно средств`,));
                        break;
                    default: break;
                }
            } else {
                dispatch(showError(`Something went wrong...`));
            }
        }
    }
};