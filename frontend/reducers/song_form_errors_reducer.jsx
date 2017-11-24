import {RECEIVE_FORM_ERRORS} from '../actions/song_actions';


const songFormErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FORM_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default songFormErrorsReducer;