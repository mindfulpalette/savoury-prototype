import axios from 'axios';


// This is a helper function for the purposes of making repeated backend requests 
// for token authentication a but easier

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth.token']
    }
}

export default setAuthToken;