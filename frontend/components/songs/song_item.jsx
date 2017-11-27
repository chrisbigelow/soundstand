import React from 'react';

export default ( { song, deleteSong, currentUser } ) => {

   const handleDelete = (e) => {
     e.preventDefault();
     deleteSong(song.id);
   };
  console.log(currentUser);
  const isUser = (currentUser.id === song.user_id ) ? "enabled" : "disabled";

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
          <li><button className={isUser} onClick={ handleDelete.bind(this) }>Delete Song</button></li>
          <li className="audio-player">
            <audio controls>
              <source src={song.song_file} type="audio/mpeg"/>
            </audio>
          </li>
        </ul>
      </div>
    </li>
  );

};