import { connect } from 'react-redux';

import SongForm from './song_form';
import { createSong } from '../../actions/song_actions';
import { startLoad } from '../../actions/loading_actions';

const mapStateToProps = state => {
  console.log(state.errors);
  return{
    errors: state.errors.songForm,
    loading: state.errors.loading.formLoading
  };
};


const mapDisptachToProps = (dispatch) => (
  {
  createSong: (song) => dispatch(createSong(song)),
  startLoad: () => dispatch(startLoad())
  }
);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(SongForm);