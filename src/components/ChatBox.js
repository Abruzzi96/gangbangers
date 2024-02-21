import React, { useState } from 'react';
import '../global.css';

const ChatBox = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  return ( 
    <div>
      <form class="chatA" onSubmit={handleMessageSubmit}>
        <label class="chatB" id="message" htmlFor="message-input"></label>
        <input class="chatC" 
          id="message-input"
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          placeholder="Enter Message" 
          aria-label="Enter Message" 
        />
        <button type="submit" aria-label="Send Message">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
