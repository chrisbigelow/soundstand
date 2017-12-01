import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import songFormErrorsReducer from './song_form_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';
import loading from './loading_reducer';

const errorsReducer = combineReducers({
   session: sessionErrorsReducer,
   songForm: songFormErrorsReducer,
   loading,
   commentForm: commentErrorsReducer
  });

export default errorsReducer;
