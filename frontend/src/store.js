import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// First the initial state must be defined
const initialState = {};

// initialize middlware within an array
const middleware =[thunk];

// The store will hold all state at the highest (app) level.
// Must be initialized with root reducer, initial state, and any middleware.
const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store