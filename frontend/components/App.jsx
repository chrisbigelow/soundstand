import React from 'react';
import SignupContainer from './session/signup_container';
import NavbarContainer from './navbar/nav_bar_container';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Route path="/" component={NavbarContainer}/>
    <Route path='/signup' component={SignupContainer}/>
  </div>
);

export default App;