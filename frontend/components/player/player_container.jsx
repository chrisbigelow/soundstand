import React from 'react';
import Player from './player';
import {play, playNextSong} from '../../actions/player_actions';

import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  currentSong: state.entities.playlist[0]
});

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  playNextSong: ()=> dispatch(playNextSong())
});


export default connect(mapStateToProps, mapDispatchToProps)(Player);



