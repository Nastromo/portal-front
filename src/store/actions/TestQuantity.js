export const setPrice = (number) => ({
    type: 'SET_PRICE',
    number
});

export const setQty = (e) => ({
    type: 'SET_QTY',
    number: e.target.value
});

export const changeGwm = (e) => ({
    type: 'SET_GWM',
    number: e.target.value
});

export const changeNd = (e) => ({
    type: 'SET_ND',
    number: e.target.value
});

export const changeVd = (e) => ({
    type: 'SET_VD',
    number: e.target.value
});

export const changeIdef = (e) => ({
    type: 'SET_IDEF',
    number: e.target.value
});

export const changeVa = (e) => ({
    type: 'SET_VA',
    number: e.target.value
});

export const changeB12 = (e) => ({
    type: 'SET_B12',
    number: e.target.value
});



export const calculateTestQuantity = (number) => {
    return async (dispatch, getState) => {
        const productOption = getState().dropdownOption.products;
        dispatch(setQty(number));
        switch (productOption) {
            case `Genetic Weight Management`:
                dispatch(setPrice(Number(number) * 295));
                break;
            case `Nutritional Deficiencies`:
                dispatch(setPrice(Number(number) * 345));
                break;
            default: dispatch(setPrice(0));
        }
    }
};