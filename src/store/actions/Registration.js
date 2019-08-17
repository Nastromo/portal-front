import API from '../../utils/Api';
import { showLoginSpinner } from './Spinner';
import { showNotification } from './Notification';



export const makeReg = (history, url, body) => {
    return async (dispatch, getState) => {
        try {
            dispatch(showLoginSpinner(true));
            const res = await API.post(url, body);
            localStorage.setItem(`emprToken`, res.data.token);
            API.defaults.headers['x-auth'] = `Bearer ${localStorage.getItem(`emprToken`)}`;
            history.push(`/terms`);
            dispatch(showLoginSpinner(false));
        } catch (err) {
            dispatch(showLoginSpinner(false));
            if (err.response) {
                switch (err.response.data) {
                    case `User already exist`:
                        dispatch(showNotification(`User already exist`, `notification-show`));
                        break;
                    default: break;
                }
            } else {
                dispatch(showNotification(`Something went wrong while login...`, `notification-show`));
            }
        }
    }
};

export const acceptTerms = () => {
    return async (dispatch, getState) => {
        try {
            await API.post('/v1/terms');
            window.location.href = `/is-confirmed`;
        } catch (err) {
            console.log(err);
        }
    }
}