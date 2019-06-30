import React from 'react';
import io from 'socket.io-client';

export const ChatContext = React.createContext();

// URL of chat socket.io server
const url = 'http://localhost:3000';
const socket = io.connect(url);

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
    this.setState({words: [...this.state.words, newWord]});
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