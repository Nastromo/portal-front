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

            let tests = [];
            if (state.gwmValue) {
                tests.push({
                    title: "Genetic Weight Management",
                    quantity: state.gwmValue
                })
            }

            if (state.ndValue) {
                tests.push({
                    title: "Nutritional Deficiencies",
                    quantity: state.ndValue
                })
            }

            if (state.vdValue) {
                tests.push({
                    title: "Vitamin D deficiency",
                    quantity: state.vdValue
                })
            }

            if (state.idefValue) {
                tests.push({
                    title: "Iron deficiency",
                    quantity: state.idefValue
                })
            }

            if (state.vaValue) {
                tests.push({
                    title: "Vitamin A deficiency",
                    quantity: state.vaValue
                })
            }

            if (state.b12Value) {
                tests.push({
                    title: "Vitamin B12 deficiency",
                    quantity: state.b12Value
                })
            }

            const paymentData = {
                amount: (295 * state.gwmValue + 345 * state.ndValue + 255 * state.vdValue + 195 * state.idefValue + 150 * state.vaValue + 150 * state.b12Value) * 100,
                token,
                tests,
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