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
import Landing from './components/landing';
import Navbar from './components/navbar.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Alert from './components/alert';

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
                      </Switch>
                    </section> 
                    
                  </Fragment>
                </Router>
            </Provider>

)};

export default App;
