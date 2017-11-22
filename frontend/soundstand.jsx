import configureStore from './store/store'
import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>SoundStand Root</h1>, root);

  const store = configureStore();
 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});