import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout, login, history}) => {
  const demoUser = {username: "testUser", password: "password"}
  const display = currentUser ? 
  (
    <div>
    <p className="username">{currentUser.username}</p>
    <button className="session-bttn-demo session-button" onClick={() => logout().then(() => history.push('/'))}>Logout</button>
    </div>
  ) : 
  (
    <div>
      <button className= "session-bttn-demo session-button" onClick={() => (login({user: demoUser}).then(() => history.push('/songs')))}>Demo User</button>
      <Link className="session-bttn-create session-button" to="/signup">Sign Up</Link>
      <Link className="session-bttn-log session-button" to="/login">Log In</Link>
    </div>
  );


  return (
    <header className="navbar">
      <Link className="link-container" to="/">
      <img className="logo-img" src="https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png"/>
      <h1 className="logo">soundstand</h1>
      </Link>
      <div className="session-buttons">
        {display}
      </div>
    </header>
    
  );
};