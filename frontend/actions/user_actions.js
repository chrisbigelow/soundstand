import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = username => dispatch => (
  APIUtil.getUser(username).then((res) => (
    dispatch(receiveUser(res))
  ))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then((res) => (
    dispatch(receiveUser(res))
  ))
);