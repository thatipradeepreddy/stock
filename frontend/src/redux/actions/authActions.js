import axios from 'axios';

export const loginUser = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', userData);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        });
    } catch (error) {
        console.error(error);
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await axios.post('http://localhost:5000/api/auth/logout');
        dispatch({ type: 'LOGOUT' });
    } catch (error) {
        console.error(error);
    }
};
