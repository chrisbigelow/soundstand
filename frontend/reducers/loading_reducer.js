import { RECEIVE_SONG } from '../actions/song_actions';
import { START_LOADING } from '../actions/loading_actions';
 
const initialState = {
  formLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONG:
      return Object.assign({}, state, { formLoading: false });
    case START_LOADING:
      return Object.assign({}, state, { formLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;