import React from 'react';
import { Link } from 'react-router-dom';

export default ( { song, deleteSong, currentUser, addSongToQueue, currentSong } ) => {

   const handleDelete = (e) => {
     e.preventDefault();
     deleteSong(song.id);
   };


   const handleSongPlay = (e) => {
     e.preventDefault();
     addSongToQueue(song);
   };

  const isUserButton = (currentUser.id === song.user_id ) ? "enabled" : "disabled";

  return (
    <li>
      <div className="song-container">
        <img className="album-cover" height="100%" width="auto" src={song.song_image}/>
        <ul>
          <li className ="song-info">
            <ul>
              <li>{song.title}</li>
              <li>{song.description}</li>
              <li>{song.artist}</li>
            </ul>
          </li>
          <li><button className="play-button" onClick={ handleSongPlay.bind(this) }>PLAY</button></li>
          <li><button className={isUserButton} onClick={ handleDelete.bind(this) }>Delete Song</button></li>
          <li><Link className={isUserButton} to={`/edit/${song.id}`}>Edit Song</Link></li>
          <li className="audio-player-html">
            <audio controls>
              <source src={song.song_file} type="audio/mpeg"/>
            </audio>
          </li>
        </ul>
      </div>
    </li>
  );

};