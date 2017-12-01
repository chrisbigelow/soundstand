import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
});


export const fetchComments = songId => dispatch => (
  APIUtil.getComments(songId).then((res) => (
    dispatch(receiveComments(res))
  ))
);

export const createComment = (comment, songId) => dispatch => (
  APIUtil.createComment(comment, songId).then((res) => (
    dispatch(receiveComment(res))))
);

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id).then((res) => (dispatch(removeComment(res))))
);