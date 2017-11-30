import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comment => ({
  type: RECEIVE_COMMENTS,
  comment
});

// export const fetchComments = userId => dispatch => (
//   APIUtil.getComments(userId).then((res) => (
//     dispatch(receiveComments(res))
//   ))
// );

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then((res) => (
    dispatch(receiveComments(res))))
);