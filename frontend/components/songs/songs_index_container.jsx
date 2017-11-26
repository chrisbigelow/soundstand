import { connect } from 'react-redux';

import SongsIndex from './songs_index';

import {fetchSongs, deleteSong} from '../../actions/song_actions';

const mapStateToProps = state => (
  {
  songs: Object.values(state.entities.songs)
  }
);

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  deleteSong: (id) => dispatch(deleteSong(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SongsIndex);

