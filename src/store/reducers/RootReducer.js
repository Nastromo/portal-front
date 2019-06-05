import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner, spinnerStatus } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { testsPrice, testQty } from './TestQuantity';
import { payment, paymentError } from './Payment';
import { address, city, state, zip } from './Address';
import { userLoading, user } from './User';
import { resultsList, resultLoading, resultError } from './Results';


const RootReducer = combineReducers({
    resultsList,
    resultLoading,
    resultError,

    spinnerStatus,

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