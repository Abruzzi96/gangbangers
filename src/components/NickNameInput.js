import React, { useState } from 'react';
import '../global.css';

const NickNameInput = ({ setNickName }) => {
  
  const [nick, setNick] = useState('');
  
  const handleNickSubmit = (e) => {
    e.preventDefault();
    setNickName(nick);
  };
  
  return (
    <div className="container chat">
      <form onSubmit={handleNickSubmit}>
        <h2>I'm the best, Fuck the rest!</h2>
        <input
          id="nickname-input"
          type="text"
          value={nick}
          onChange={e => setNick(e.target.value)}
          placeholder="Set Nick"
          required
          aria-label="Set Nick"
        />
        <button type="submit" aria-label="Set Nick Name">Set Nick</button>
      </form>
    </div>
  );
};

export default NickNameInput;

