import API from '../../utils/Api';
import { showLoginSpinner } from './Spinner';
import { showNotification } from './Notification';



export const makeLogin = (history, url, body) => {
    return async (dispatch, getState) => {
        try {
            dispatch(showLoginSpinner(true));
            const res = await API.post(url, body);
            localStorage.setItem(`emprToken`, res.data.token);
            API.defaults.headers['x-auth'] = `Bearer ${localStorage.getItem(`emprToken`)}`;
            history.push(`/account/products`);
            dispatch(showLoginSpinner(false));
        } catch (err) {
            dispatch(showLoginSpinner(false));
            if (err.response) {
                switch (err.response.data) {
                    case `Credentials are wrong`:
                        dispatch(showNotification(`Incorrect login or password`, `notification-show`));
                        break;
                    case `No such user`:
                        dispatch(showNotification(`No such user`, `notification-show`));
                        break;
                    default: break;
                }
            } else {
                dispatch(showNotification(`Something went wrong while login...`, `notification-show`));
            }
        }
    }
};