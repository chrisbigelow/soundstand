import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import songs from './songs_reducer';
import users from './users_reducer';
import playlist from './player_reducer';

export default combineReducers({
  songs,
  users,
  playlist
});