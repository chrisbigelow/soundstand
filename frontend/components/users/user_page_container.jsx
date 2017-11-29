import React from 'react';
import { connect } from 'react-redux';
import userPage from './user_page';

import { fetchUser } from '../../actions/user_actions';
import { fetchUserSongs, deleteSong } from '../../actions/song_actions';
import { addSongToQueue } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  users: state.entities.users,
  songs: state.entities.songs,
  currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  fetchUserSongs: (id) => dispatch(fetchUserSongs(id)),
  deleteSong: (id) => dispatch(deleteSong(id)),
  addSongToQueue: (song) => dispatch(addSongToQueue(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(userPage);
