import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
  const display = currentUser ? 
  (
    <div>{currentUser.username}
    <button onClick={logout}>Logout</button>
    </div>
  ) : 
  (
    <div>
      <Link className="session-bttn" to="/signup">Sign Up</Link>
      <Link className="session-bttn" to="/login">Log In</Link>
    </div>
  );


  return (
    <header className="navbar">
      <h1 className="logo">soundstand</h1>
      <div className="session-buttons">
        {display}
      </div>
    </header>
    
  );
}