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
      <div>
        <ul>
          {
            songs.map(song => (
              <SongItem
                key={`song${song.id}`}
                song = {song}
              />
            ))
          }
        </ul>
      </div>
    );

  }
}

export default SongsIndex;