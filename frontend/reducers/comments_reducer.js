import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      let comments = {};
      action.comments.forEach((comment) => {
      comments[comment.id] = comment;
      });
      return comments;
    case RECEIVE_COMMENT:
       const gotComment = action.comment;
       return merge({}, state, {[gotComment.id]: gotComment});
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      console.log(newState);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;