import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';

class Player extends React.Component {
  constructor(props){
    super(props);
  }

  handlePlay(e) {
  
  }

  handlePause(e){
    
  }

  handleEnded(e){
    this.playNextSong();
  }

  render() {
    
    let songInfo = "";
    let currentSongUrl = "";

    if (this.props.currentSong){
    
      currentSongUrl = this.props.currentSong.song_file;
      songInfo = (
          <div className="song-info-container">
            <div className="current-song-image-container">
              <img src={this.props.currentSong.song_image} alt=""></img>
            </div>
            <div className="title-song-name">
              <ul>
                <li>{this.props.currentSong.title}</li>
                <li>{this.props.currentSong.artist}</li>
              </ul>
            </div>
          </div>
      );
   }


   return(
    <div className="audio-player-container">
      <h1>Audio Player</h1>
      <ReactAudioPlayer id="react-player" className="audio-player" controls autoplay src={currentSongUrl}
        onEnded={this.handleEnded.bind(this)}
        onPlay={this.handlePlay.bind(this)}
        onPause={this.handlePause.bind(this)}>
      </ReactAudioPlayer>
      {songInfo}
    </div>
  );

  }

}

export default Player;