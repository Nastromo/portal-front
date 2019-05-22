import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { testsPrice, testQty } from './TestQuantity';
import { payment, paymentError } from './Payment';
import { address, city, state, zip } from './Address';
import { userLoading, user } from './User';


const RootReducer = combineReducers({
    loginSpinner,
    notificationCss,
    notificationText,

    dropdownStatus,
    dropdownOption,

    testsPrice,
    testQty,

    payment,
    paymentError,

    address,
    city,
    state,
    zip,

    userLoading,
    user
});


export default RootReducer;