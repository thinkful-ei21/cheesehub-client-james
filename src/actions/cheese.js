export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});
export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheeses => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESES_ERROR,
    error
});

// fetchCheesesSuccess
// fetchCheesesError

export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
    fetch('http://localhost:8080/api/cheeses', {
        method: 'GET'
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(data => dispatch(fetchCheeseSuccess(data.cheeses)))
        .catch(err => dispatch(fetchCheesesError(err)));
};
