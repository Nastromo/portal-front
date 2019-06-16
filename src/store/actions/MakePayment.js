import API from '../../utils/Api';
import { showSpinner } from '../actions/Spinner';


const successPayment = (bool) => ({
    type: 'PAYMENT_OK',
    bool
});


const showError = (errorText) => ({
    type: 'PAYMENT_ERROR',
    errorText
});

const setPayment = (data) => ({
    type: 'SET_PAYMENT_SUCCESS',
    data
});


export const makePayment = (stripe) => {
    return async (dispatch, getState) => {
        try {
            dispatch(showSpinner(true));
            const state = getState();
            let { token } = await stripe.createToken({ name: state.user.userId });
            const paymentData = {
                amount: state.testsPrice * 100,
                token,
                testTitle: state.dropdownOption.products,
                quantity: state.testQty,
                address: state.address,
                city: state.city,
                state: state.state,
                zip: state.zip,
            }

            const res = await API.post('/v1/make-payment', paymentData);
            dispatch(setPayment(res.data))
            dispatch(successPayment(true));
            dispatch(showSpinner(false));
        } catch (err) {
            console.log(err);
            dispatch(showSpinner(false));
            dispatch(showError(`Something went wrong...`));
            // if (err.response) {
            //     switch (err.response.data) {
            //         case `Не достаточно средств`:
            //             dispatch(showError(`Не достаточно средств`,));
            //             break;
            //         default: break;
            //     }
            // } else {
            //     dispatch(showError(`Something went wrong...`));
            // }
        }
    }
};