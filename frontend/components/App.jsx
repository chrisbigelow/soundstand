import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavbarContainer from './navbar/nav_bar_container';
import SongsContainer from './songs/songs_index_container';
import SongFormContainer from './songs/song_form_container';
import UserPageContainer from './users/user_page_container';
import SongPageContainer from './songs/song_page_container';
import PlayerContainer from './player/player_container';
import SongEditContainer from './songs/song_edit_container';
import UserEditContainer from './users/edit_user_container';
import MainContainer from './main_page/main_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
    <div className="app-container">
        <Route path="/" component={NavbarContainer}/>
        <Route exact path="/" component={MainContainer} />
        <Switch>
        <ProtectedRoute exact path="/songs" component={SongsContainer} />
        <ProtectedRoute exact path="/songs/:songId" component={SongPageContainer} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/users/:username/edit" component={UserEditContainer}/>
          <ProtectedRoute exact path="/users/:username" component={UserPageContainer}/>
        </Switch>
        <ProtectedRoute exact path="/edit/:songId" component={SongEditContainer}/>
        <ProtectedRoute exact path="/upload" component={SongFormContainer} />
        <AuthRoute exact path='/signup' component={SignupContainer}/>
        <AuthRoute exact path='/login' component={SigninContainer}/>
        <PlayerContainer/>
    </div>
);

export default App;