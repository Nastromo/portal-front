import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';


const RootReducer = combineReducers({
    loginSpinner,
    notificationCss,
    notificationText
});


export default RootReducer;