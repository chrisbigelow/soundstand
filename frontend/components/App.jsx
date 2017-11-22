import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavbarContainer from './navbar/nav_bar_container';
import Main from './main_page/main';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Route path="/" component={NavbarContainer}/>
    <Route exact path="/" component={Main} />
    <Route path='/signup' component={SignupContainer}/>
    <Route path='/login' component={SigninContainer}/>
  </div>
);

export default App;