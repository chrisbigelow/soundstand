import React from 'react';
import SongItem from '../songs/song_item';
import {Link} from 'react-router-dom';

class userPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.username).then((res) => this.props.fetchUserSongs(res.user.id));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.props.fetchUser(nextProps.match.params.username).then((res) => this.props.fetchUserSongs(res.user.id));
    }
  }

  render(){
    const user = Object.values(this.props.users)[0];
    const songs = Object.values(this.props.songs);

    if (!user) return null;

    return (
      <div className= "profile-container">

        <section className="user-profile">
          <div className="profile-header">
            <div className="info-section">
              <div className="profile-image"></div>
              <ul className="user-info">
                <li>{user.username}</li>
                <li>{user.name}</li>
                <li>{user.location}</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="user-tracks">
          <h1>{user.username}'s Tracks</h1>
          <ul>
          {
            songs.map(song => (
              <SongItem
                key={`song${song.id}`}
                song = {song}
                deleteSong={this.props.deleteSong}
                currentUser={this.props.currentUser}
              />
            ))
          }
          </ul>
        </section>
        
      </div>
        

    );
  }




}

export default userPage;