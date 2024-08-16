import axios from 'axios';

export const fetchWatchlist = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/watchlist');
        dispatch({
            type: 'FETCH_WATCHLIST_SUCCESS',
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_WATCHLIST_FAIL',
            payload: error.response.data.message,
        });
    }
};
