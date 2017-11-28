import { connect } from 'react-redux';

import SongEdit from './song_edit';
import { updateSong, fetchSong } from '../../actions/song_actions';

const mapStateToProps = (state) => {

  return {
    songs: state.entities.songs
  };
};

const mapDisptachToProps = (dispatch) => (
  {
  fetchSong: (song) => dispatch(fetchSong(song)),
  updateSong: (song) => dispatch(updateSong(song))
  }
);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(SongEdit);