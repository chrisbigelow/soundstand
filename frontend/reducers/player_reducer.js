import { PLAY_PREVIOUS,ADD_TO_QUEUE,PLAY_NEXT,PLAY } from "../actions/player_actions";
import merge from 'lodash/merge';

const playerReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch(action.type) {
    case PLAY_NEXT:
      return state.slice(1);
    case PLAY:
      return state;
    case ADD_TO_QUEUE:
      return [action.song, ...state];
    default:
      return state;
  }

};

export default playerReducer;