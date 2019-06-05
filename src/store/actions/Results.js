import API from '../../utils/Api';

export const setResults = (data) => ({
    type: 'SET_RESULTS',
    data
});

export const setError = (bool) => ({
    type: 'SET_RESULTS_ERR',
    bool
});

export const setLoading = (bool) => ({
    type: 'SET_RESULTS_LOADING',
    bool
});


export const getResults = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get('/v1/results');
            console.log(res.data)
            dispatch(setResults(res.data));
            dispatch(setLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(setLoading(false));
            dispatch(setError(true));
        }
    }
};