import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Styles
import './App.css';
import './bootstrap.min.css';

//Components
import Landing from './components/landing';
import Navbar from './components/navbar.js';
import Login from './components/login.js';
import Register from './components/register.js';


const App = () =>
    <Provider store={store}>
        <Router>
          <Fragment>
            
            <Navbar/>
            <Route exact path="/" component={ Landing }/>
            <section className="container p-5">
              <Switch>
                <Route exact path="/register" component={ Register }/>
                <Route exact path="/login" component={ Login }/>
              </Switch>
            </section> 
            
          </Fragment>
        </Router>
    </Provider>

export default App;
