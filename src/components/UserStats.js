// UserStats.js
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserStats() {
  const { user } = useContext(UserContext);

  return user ? (
    <div>
      <h2>User Stats</h2>
      <p>Username: {user.username}</p>
      <p>Score: {user.score}</p>
      {/* other user stats */}
    </div>
  ) : (
    <p>No user logged in.</p>
  );
}

export default UserStats;
