import React from 'react';
import io from 'socket.io-client';

export const ChatContext = React.createContext();

// URL of chat socket.io server
const HerokDeploymentURL = 'https://chat-app-sock.herokuapp.com/';
const socket = io.connect(HerokDeploymentURL);

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      typedInput: '',
      //--------------
      updateWords: this.updateWords,
      handleSubmit: this.handleSubmit,
      handleNewWords: this.handleNewWords,
    };

    socket.on('incoming', payload => this.updateWords(payload));
  }

  updateWords = (newWord) => {
    this.setState({words: [ newWord, ...this.state.words]});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    socket.emit('chat', this.state.typedInput);
  };

  handleNewWords = (event) => {
    this.setState({ typedInput: event.target.value });
  };

  render() {
    return (
      <ChatContext.Provider value={this.state}>
        {this.props.children}
      </ChatContext.Provider>
    );
  }
}