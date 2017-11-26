import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavbarContainer from './navbar/nav_bar_container';
import SongsContainer from './songs/songs_index_container';
import SongFormContainer from './songs/song_form_container';
import Main from './main_page/main';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
  <div className="app-container">
    <Route path="/" component={NavbarContainer}/>
    <Route exact path="/" component={Main} />
    <ProtectedRoute path="/songs" component={SongsContainer} />
    <ProtectedRoute path="/upload" component={SongFormContainer} />
    <AuthRoute path='/signup' component={SignupContainer}/>
    <AuthRoute path='/login' component={SigninContainer}/>
  </div>
);

export default App;