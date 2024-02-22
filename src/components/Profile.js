// src/components/Profile.js
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import '../global.css';

function Profile() {
  const { user } = useContext(AuthContext);

 return (
    <div className="container">
      {user ? (
        <h1 role="heading" aria-label={`Welcome message for ${user.username}`}>Welcome, {user.username}</h1>
      ) : (
        <h1 role="heading" aria-label="Login instruction">Please log in.</h1>
      )}
    </div>
  );
}

export default Profile;
