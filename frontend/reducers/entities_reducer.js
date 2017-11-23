import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import songs from './songs_reducer';

export default combineReducers({
  songs
});