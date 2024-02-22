import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ChatBox from "./ChatBox";
import Message from "./Message";
import NickNameInput from "./NickNameInput";
import '../global.css';

class ChatApp extends Component {
  constructor() {
    super();
    this.state = {
      nick: '',
      messages: [],
    };

    this.socket = socketIOClient('10.10.38.66:4000');
    this.socket.on('fromServer', (msg) => {
      this.setState({ messages: [...this.state.messages, msg] });
    });
  }

  setNickName = (nick) => {
    this.setState({ nick });
  };

  sendMessage = (message) => {
    this.socket.emit('fromClient', { nick: this.state.nick, message });
  };

  render() {
    return (
      <div>
        {this.state.nick === '' ? (
          <NickNameInput setNickName={this.setNickName} />
        ) :
          <div>
            
            <ChatBox sendMessage={this.sendMessage} />
            <section aria-live='polite'>
              {this.state.messages.map((message, i) => (
                <Message key={i} message={message} />
              ))}
            </section>
          </div>
        }
      </div>
    );
  }
}
export default ChatApp;

