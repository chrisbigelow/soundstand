import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SONG } from '../actions/song_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return {[action.user.id]: action.user};
    default:
      return state;
  }
};

export default usersReducer;