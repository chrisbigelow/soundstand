import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import {signup, logout} from './actions/session_actions';
import {fetchSong} from './actions/song_actions';
import {getSong,getSongs, deleteSong, addSong, updateSong} from './util/song_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.current_user) {
    preloadedState = {session:{currentUser: window.current_user}};
  }
  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={ store }/>, root);


  //TESTING

  // const store = configureStore();
  // // // we don't put the store directly on the window because
  // // it can be confusing when debugging, sometimes giving you access to state
  // // when you shouldn't
  window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!
  // window.fetchSong = fetchSong;
  // window.getSong = getSong;
  // window.getSongs = getSongs;
  // window.deleteSong = deleteSong;
  // window.addSong = addSong;
  // window.updateSong = updateSong;

});