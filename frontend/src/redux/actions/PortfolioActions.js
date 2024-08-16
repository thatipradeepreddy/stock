import axios from 'axios';

export const fetchPortfolio = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/portfolio');
        dispatch({ type: 'FETCH_PORTFOLIO_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'FETCH_PORTFOLIO_FAIL', payload: error });
    }
};
