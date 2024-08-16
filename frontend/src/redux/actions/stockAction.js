import axios from 'axios';

export const fetchStocks = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/stocks/real-time/MSFT');
        dispatch({
            type: 'FETCH_STOCKS_SUCCESS',
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_STOCKS_FAIL',
            payload: error.response.data.message,
        });
    }
};
