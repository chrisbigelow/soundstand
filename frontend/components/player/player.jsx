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

  handleLoaded(e) {
    let player = document.getElementsByClassName("react-audio-player")[0];
    let promise = player.play();
    if (promise !== undefined) {
      promise.then(function() {
      console.log("playing!");
      }).catch(function(error) {
      console.log(error);
      });
    }
  }

  render() {
    
    let songInfo = "";
    let currentSongUrl = "";

    if (this.props.currentSong){
    
      currentSongUrl = this.props.currentSong.song_file;
      songInfo = (
          <div className="song-info-container">
            <ul>
              <li>
                  <div className="current-song-image-container">
                    <img src={this.props.currentSong.song_image} alt=""></img>
                  </div>
              </li>
              <li>
                  <div className="title-song-name">
                    <ul>
                      <li>{this.props.currentSong.title}</li>
                      <li>{this.props.currentSong.artist}</li>
                    </ul>
                  </div>
              </li>
            </ul>
          </div>
      );
   }


   return(
    <div className="audio-player-container">
      <ul>
        <li>{songInfo}</li>
      </ul>
      <ReactAudioPlayer className="audio-player" controls autoplay src={currentSongUrl}
          onEnded={this.handleEnded.bind(this)}
          onPlay={this.handlePlay.bind(this)}
          onPause={this.handlePause.bind(this)}
          onCanPlay={this.handleLoaded.bind(this)}
          >
        </ReactAudioPlayer>
    </div>
  );

  }

}

export default Player;