import React from 'react';
import Words from './words.js';
import Form from './form.js';

import ChatContextProvider from './context/chat-context';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: [],
    };
  }

  // update set with entered words
  updateWords = (newWord) => {
    this.setState({words: [...this.state.words, newWord]});
  };

  // 
  render() {
    return (
      <>
        <ChatContextProvider>
          {/* <Words words={this.state.words}/> */}
          <Words />
          {/* <Form handleInboundWords={this.updateWords}/> */}
          <Form />
        </ChatContextProvider>
      </>
    );
  }
};