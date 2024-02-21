import React, { useState } from 'react';
import '../global.css';

const NickNameInput = ({ setNickName }) => {
  const [nick, setNick] = useState('');
  
  const handleNickSubmit = (e) => {
    e.preventDefault();
    setNickName(nick);
  };

  return (
    <form class="chatD" onSubmit={handleNickSubmit}>
<h2>Im the best, Fuck the rest!</h2>
      <label class="chatE" id="nickname" htmlFor="nickname-input"></label>
      <input class="chatF"
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
