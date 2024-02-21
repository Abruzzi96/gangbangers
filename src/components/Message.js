import React from 'react';

const Message = ({ message }) => (
  <div>
    <strong>{message.nick}: </strong> {message.message}
  </div>
);

export default Message;
