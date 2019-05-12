export const setPrice = (number) => ({
    type: 'SET_PRICE',
    number
});



export const calculateTestQuantity = (number) => {
    return async (dispatch, getState) => {
        const productOption = getState().dropdownOption.products;
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