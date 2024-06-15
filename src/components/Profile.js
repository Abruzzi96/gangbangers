// src/components/Profile.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import UserStats from './UserStats'; // Import UserStats component

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <UserStats /> {/* Render UserStats component here */}
          {/* Additional profile information can be added here */}
        </div>
      ) : (
        <h1>Please log in to view your profile.</h1>
      )}
    </div>
  );
}

export default Profile;
