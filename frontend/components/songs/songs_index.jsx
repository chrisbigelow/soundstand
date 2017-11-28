import React from 'react';
import SongItem from './song_item';

class SongsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    return (
      <div className="song-index-container">
        <ul>
          {
            songs.map(song => (
              <SongItem
                key={`song${song.id}`}
                song = {song}
                deleteSong={this.props.deleteSong}
                currentUser={this.props.currentUser}
                addSongToQueue={this.props.addSongToQueue}
                currentSong={this.props.currentSong}
              />
            ))
          }
        </ul>
      </div>
    );

  }
}

export default SongsIndex;