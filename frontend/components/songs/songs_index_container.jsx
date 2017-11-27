import { connect } from 'react-redux';

import SongsIndex from './songs_index';

import {fetchSongs, deleteSong} from '../../actions/song_actions';
import { addSongToQueue } from '../../actions/player_actions';

const mapStateToProps = state => (
  {
  songs: Object.values(state.entities.songs),
  currentUser: state.session.currentUser
  }
);

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  deleteSong: (id) => dispatch(deleteSong(id)),
  addSongToQueue: (song) => dispatch(addSongToQueue(song))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SongsIndex);

