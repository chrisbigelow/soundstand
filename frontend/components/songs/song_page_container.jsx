import React from 'react';
import { connect } from 'react-redux';
import SongPage from './song_page';

import { updateSong, deleteSong, fetchSong } from '../../actions/song_actions';
import { addSongToQueue } from '../../actions/player_actions';
import { createComment, fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  song: Object.values(state.entities.songs)[0],
  currentUser: state.session.currentUser,
  comments: Object.values(state.entities.comments)
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSong: (id) => dispatch(fetchSong(id)),
  deleteSong: (id) => dispatch(deleteSong(id)),
  updateSong: (id) => dispatch(updateSong(id)),
  addSongToQueue: (id) => dispatch(addSongToQueue(id)),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: (userId) => dispatch(fetchComments(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongPage);