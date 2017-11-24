import { connect } from 'react-redux';

import SongForm from './song_form';
import { createSong } from '../../actions/song_actions';

// const mapStateToProps = ({})

//lets use this for errors, ok?
// and remember chris, you are doing great:)

const mapDisptachToProps = (dispatch) => (
  {
  createSong: (song) => dispatch(createSong(song))
  }
);

export default connect(
  null,
  mapDisptachToProps
)(SongForm);