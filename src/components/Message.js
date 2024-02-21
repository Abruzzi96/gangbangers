import React from 'react';
import '../global.css';

const Message = ({ message }) => (
  <div>
    <strong>{message.nick}: </strong> {message.message}
  </div>
);

export default Message;
