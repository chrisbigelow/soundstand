import merge from 'lodash/merge';
import {RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG} from '../actions/song_actions';

const songReducer = (state = { }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONGS:
      return merge({}, action.songs);
    case RECEIVE_SONG:
    const song = action.payload;
    return merge({}, {[song.id]: song});
    case REMOVE_SONG:
      let newState = merge({}, state);
      delete newState[`${action.songId.id}`];
      return newState;
    default:
      return state;
  }
};

export default songReducer;