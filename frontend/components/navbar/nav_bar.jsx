import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout, login}) => {
  const demoUser = {username: "testUser", password: "password"}
  const display = currentUser ? 
  (
    <div>{currentUser.username}
    <button onClick={() => logout()}>Logout</button>
    </div>
  ) : 
  (
    <div>
      <button className= "session-bttn-demo session-button" onClick={() => (login({user: demoUser}))}>Demo User</button>
      <Link className="session-bttn-create session-button" to="/signup">Sign Up</Link>
      <Link className="session-bttn-log session-button" to="/login">Log In</Link>
    </div>
  );


  return (
    <header className="navbar">
      <img className="logo-img" src="https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png"/>
      <h1 className="logo">soundstand</h1>
      <div className="session-buttons">
        {display}
      </div>
    </header>
    
  );
}