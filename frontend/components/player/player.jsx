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

  menuClick() {
    document.getElementById("dropup").classList.toggle("show");
    if ( document.getElementById("caret").classList.contains('fa-caret-up') ) {
      document.getElementById("caret").classList.remove('fa-caret-up');
      document.getElementById("caret").classList.add('fa-caret-down');
    } else {
      document.getElementById("caret").classList.remove('fa-caret-down');
      document.getElementById("caret").classList.add('fa-caret-up');
    }
  } 

  handleLoaded(e) {
    let player = document.getElementsByClassName("react-audio-player")[0];
    let promise = player.play();
    if (promise !== undefined) {
      promise.then(function() {
      }).catch(function(error) {
      });
    }
  }

  render() {

    let carrotPointerUp = (<i id="caret" className="fa fa-caret-up" aria-hidden="true"></i>);
    
    let songInfo = "";
    let currentSongUrl = "";

    if (this.props.currentSong){
    
      currentSongUrl = this.props.currentSong.song_file;
      songInfo = (
          <div className="song-info-container">
            <ul>
              <li>
                <a id="carrot-anchor-up" onClick={() => this.menuClick()} className="carrot">{carrotPointerUp}</a>
              </li>
              <li id="dropup" className="song-dropup">
                  <div className="title-song-name">
                    <ul>
                      <li>
                        <div className="current-song-image-container">
                          <img src={this.props.currentSong.song_image} alt=""></img>
                        </div>
                      </li>
                      <li>
                        <ul className="title-artist-player">
                          <li>Title: {this.props.currentSong.title}</li>
                          <li>Artist: {this.props.currentSong.artist}</li>
                        </ul>
                      </li>
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