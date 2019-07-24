import { showNotification } from './Notification';
import API from '../../utils/Api';


export const isLoading = (bool) => ({
    type: 'USER_LOADING',
    bool
});


export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const saveUserInfo = (first, last, dob) => {
    return async (dispatch, getState) => {
        try {
            const url = new URL(window.location.href)
            const token = url.searchParams.get('key');
            console.log(token);
            await API.post(`/v1/validate-reg`, {
                token,
                first,
                last,
                dob
            });
            window.location.href = `/account/products`;
        } catch (err) {
            console.log(err);
        }
    }
}

export const getUser = (history) => {
    return async (dispatch, getState) => {
        try {
            dispatch(isLoading(true));
            const res = await API.get(`/v1/user`);
            dispatch(setUser(res.data));
            dispatch(isLoading(false));
        } catch (err) {
            history.push(`/`);
            if (err.response) {
                switch (err.response.data) {
                    case `invalid token`:
                        dispatch(showNotification(`Your token is invalid`, `notification-show`));
                        break;
                    default: dispatch(showNotification(`Please, enter login and password`, `notification-show`));
                }
            } else {
                dispatch(showNotification(`Something went wrong while fetching user info...`, `notification-show`));
            }
        }
    }
};



