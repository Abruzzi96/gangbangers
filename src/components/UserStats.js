// /srch/components/UserStats.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Correct import statement

function UserStats() {
  const { user } = useContext(AuthContext); // Use AuthContext instead of UserContext

  return user ? (
    <div>
      <p>Money: {user.money}</p>
      <p>Stamina: {user.stamina}</p>
      <br/>
      <p>Level: {user.level}</p>
      <p>EXP: {user.experience}</p>
      <p>STR: {user.strenght}</p>
      <p>DEX: {user.dexterity}</p>
      {/* other user stats */}
    </div>
  ) : (
    <p>No user logged in.</p>
  );
}

export default UserStats;
