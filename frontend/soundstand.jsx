import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import {signup, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.current_user) {
    preloadedState = {session:{currentUser: window.current_user}};
  }
  let store = configureStore(preloadedState);
  ReactDOM.render(<Root store={ store }/>, root);

  // // const store = configureStore();
  // // // we don't put the store directly on the window because
  // // // it can be confusing when debugging, sometimes giving you access to state
  // // // when you shouldn't
  // window.getState = store.getState;
  // window.preloadedState = preloadedState;
  // window.logout = logout;
  // window.dispatch = store.dispatch; // just for testing!

});