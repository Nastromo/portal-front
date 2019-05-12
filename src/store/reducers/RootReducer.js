import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { testsPrice } from './TestQuantity';


const RootReducer = combineReducers({
    loginSpinner,
    notificationCss,
    notificationText,

    dropdownStatus,
    dropdownOption,
    
    testsPrice
});


export default RootReducer;