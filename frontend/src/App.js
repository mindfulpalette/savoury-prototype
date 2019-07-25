import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setAuthToken from './util/setAuthToken';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';

//Styles
import './style/App.css';
import './style/bootstrap.min.css';

//Components
import Landing from './components/layout/landing';
import Navbar from './components/layout/navbar.js';
import Login from './components/auth/login.js';
import Register from './components/auth/register.js';
import Alert from './components/layout/alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routes/PrivateRouting';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {

  //Mimics the effect of componentDidMount() in a class based components
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return (

            <Provider store={store}>
                <Router>
                  <Fragment>
                    
                    <Navbar/>
                    <Route exact path="/" component={ Landing }/>
                    <section className="container p-5">
                      <Alert/>
                      <Switch>
                        <Route exact path="/register" component={ Register }/>
                        <Route exact path="/login" component={ Login }/>
                        <PrivateRoute exact path="/dashboard" component={ Dashboard }/>
                      </Switch>
                    </section> 
                    
                  </Fragment>
                </Router>
            </Provider>

)};

export default App;
