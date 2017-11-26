import React from 'react';

export default ( { song } ) => {

  return (
    <li>
      <h3>{song.title}</h3>
      <p>{song.description}</p>
      <p>{song.user_id}</p>
      <img height="100%" width="auto" src={song.song_image}/>
      <a onclick="this.firstChild.play()">
        <audio>
          <source src={song.song_file} type="audio/mpeg"/>
        </audio>
      ▸</a>
    </li>
  );

};