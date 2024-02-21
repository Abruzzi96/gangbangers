// src/components/Profile.js
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Profile() {
  const { user } = useContext(AuthContext);

  return user ? (
    <h1>Welcome, {user.username}</h1>
  ) : (
    <h1>Please log in.</h1>
  );
}

export default Profile;
