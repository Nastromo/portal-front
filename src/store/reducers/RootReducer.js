import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner, spinnerStatus } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { testsPrice, testQty, gwmValue, ndValue, vdValue, idefValue, vaValue, b12Value } from './TestQuantity';
import { payment, paymentError, paymentData } from './Payment';
import { address, city, state, zip } from './Address';
import { userLoading, user, dob } from './User';
import { resultsList, resultLoading, resultError } from './Results';
import { checkbox } from './CheckBox';


const RootReducer = combineReducers({
    dob,
    gwmValue,
    b12Value,
    vaValue,
    idefValue,
    vdValue,
    ndValue,
    checkbox,
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
    paymentData,

    address,
    city,
    state,
    zip,

    userLoading,
    user
});


export default RootReducer;