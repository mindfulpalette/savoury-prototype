import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Styles
import './App.css';
import './bootstrap.min.css';

//Components
import Landing from './components/landing';
import Navbar from './components/navbar.js';
import Login from './components/login.js';
import Register from './components/register.js';


const App = () =>
    <Router>
      <Fragment>
        
        <Navbar/>
        <Route exact path="/" component={ Landing }/>
        <section className="container">
          <Switch>
            <Route exact path="/register" component={ Register }/>
            <Route exact path="/login" component={ Login }/>
          </Switch>
        </section> 
        
      </Fragment>
    </Router>

export default App;
