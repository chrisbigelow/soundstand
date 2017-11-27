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
    console.log(this.props);
    if (!this.props.playlist){
      return (null);
    } else {
      return(
      <div className="audio-player">
        <ReactAudioPlayer controls autoPlay src={this.props.playlist.currentSong}
          onEnded={this.handleEnded.bind(this)}
          onPlay={this.handlePlay.bind(this)}
          onPause={this.handlePause.bind(this)}>
        </ReactAudioPlayer>
      </div>
    );
   }
  }

}

export default Player;