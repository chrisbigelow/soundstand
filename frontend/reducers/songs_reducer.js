import merge from 'lodash/merge';
import {RECEIVE_SONGS, RECEIVE_SONG} from '../actions/song_actions';

const songReducer = (state = { }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONGS:
      return merge({}, state, action.songs);
    case RECEIVE_SONG:
    const song = action.payload;
    return merge({}, state, {[song.id]: song});
    default:
      return state;
  }
};

export default songReducer;