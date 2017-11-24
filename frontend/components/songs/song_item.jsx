import React from 'react';

export default ( { song } ) => {

  return (
    <li>
      <h3>{song.title}</h3>
      <p>{song.description}</p>
      <p>{song.user_id}</p>
    </li>
  );

};