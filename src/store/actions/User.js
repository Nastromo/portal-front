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



