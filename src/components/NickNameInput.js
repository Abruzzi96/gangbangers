import React, { useState } from 'react';

const NickNameInput = ({ setNickName }) => {
  const [nick, setNick] = useState('');
  
  const handleNickSubmit = (e) => {
    e.preventDefault();
    setNickName(nick);
  };

  return (
    <form onSubmit={handleNickSubmit}>
      <label id="nickname" htmlFor="nickname-input">Set Nick</label>
      <input 
        id="nickname-input"
        type="text" 
        value={nick} 
        onChange={(e) => setNick(e.target.value)} 
        placeholder="Set Nick" 
        required 
        aria-label="Set Nick"
      />
      <button type="submit" aria-label="Set Nick Name">Set Nick</button>
    </form>
  );
};

export default NickNameInput;
