import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout, login, history}) => {
  const demoUser = {username: "testUser", password: "password"}
  const barName = currentUser ? "logged-in-nav" : "navbar";
  const collection = currentUser ? (<Link className="stream-button" to='/songs'>Collection</Link>) : (<div></div>);
  const display = currentUser ? 
  (
    <div>
    <Link className="username upload-page-button" to='/upload'>Upload</Link>
    <Link className="username" to={`/users/${currentUser.username}`}>{currentUser.username}</Link>
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
    <header className={barName}>
      <Link className="link-container" to="/">
      <img className="logo-img" src="http://res.cloudinary.com/dmzulpcul/image/upload/c_scale,h_22/v1511758120/noun_1126327_cc_zy2ose.png"/>
      <h1 className="logo">soundstand</h1>
      </Link>
      {collection}
      <div className="session-buttons">
        {display}
      </div>
    </header>
    
  );
};