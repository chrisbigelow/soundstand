import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  id: commentId.id
});

export const receiveCommentErrors = errors => {
  return{
  type: RECEIVE_COMMENT_ERRORS,
  errors
  };
};


export const fetchComments = songId => dispatch => (
  APIUtil.getComments(songId).then((res) => (
    dispatch(receiveComments(res))
  ))
);

export const createComment = (comment, songId) => dispatch => (
  APIUtil.createComment(comment, songId).then((res) => (
    dispatch(receiveComment(res),err => (dispatch(receiveCommentErrors(err.responseJSON))))))
);

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id).then((res) => (dispatch(removeComment(res))))
);