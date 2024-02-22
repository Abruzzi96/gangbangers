import React from 'react';
import '../global.css';

const Message = ({ message }) => (
  <div className="container chat"> 
    <strong>{message.nick}: </strong> {message.message}
  </div>
);

export default Message;
