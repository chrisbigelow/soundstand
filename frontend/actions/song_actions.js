import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = payload => ({
  type: RECEIVE_SONG,
  payload
});

export const createSong = song => dispatch => (
  APIUtil.createSong(song).then((res) => (
    dispatch(receiveSong(res))
  ))
);

export const fetchSong = id => dispatch => (
  APIUtil.getSong(id).then((res) => (
    dispatch(receiveSong(res))
  ))
);

export const fetchSongs = song => dispatch => (
  APIUtil.getSongs(song).then((res) => (
    dispatch(receiveSongs(res))
  ))
);

export const updateSong = song => dispatch => (
  APIUtil.getSongs(song).then((res) => (
    dispatch(receiveSong(res))
  ))
);


//how to delete

// export const deleteSong = id => dispatch => (
//   APIUtil.deleteSong(id).then((res) => (
//     dispatch(receiveSongs(res))
//   ))
// );



