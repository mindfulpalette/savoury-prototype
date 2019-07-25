import axios from 'axios';
import { setAlert } from './alert';
import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_FAIL, 
    LOGIN_SUCCESS,
    LOGOUT
 } from './types';
import setAuthToken from '../../util/setAuthToken';






// Load User
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try {

       const res = await axios.get('/api/v1/auth', { baseURL: 'http://localhost:5000'});

       dispatch({
           type: USER_LOADED,
           payload: res.data
       });

    } catch (error) {
       
        dispatch({
            type: AUTH_ERROR
        })
    }
}




// Login User
export const login = (email, password ) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: 'http://localhost:5000'
    }

    const body = JSON.stringify({ email, password });

    try {

        const res = await axios.post('/api/v1/auth', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (error) {

        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }

}






// Register User
export const register = ({ first_name, last_name, email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: 'http://localhost:5000'
    }

    const body = JSON.stringify({ first_name, last_name, email, password });

    try {

        const res = await axios.post('/api/v1/users', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (error) {

        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }

};

// Logout 
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};