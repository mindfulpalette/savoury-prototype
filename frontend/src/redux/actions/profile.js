import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';





// Get Current Users Profile
export const getCurrentProfile = () => async dispatch => {

    try {

        const res = await axios.get('/api/v1/profile/me', { baseURL: 'http://localhost:5000'});

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { 
                msg: error.response.statusText,
                status: error.response.status
            }
        });
    }
}