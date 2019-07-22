import React, { Fragment } from 'react';
import './App.css';
import './bootstrap.min.css';

//Components
import Landing from './components/landing';
import Navbar from './components/navbar.js';

const App = () => 
    <Fragment>
      <Navbar/>
      <Landing/>
    </Fragment>

export default App;
