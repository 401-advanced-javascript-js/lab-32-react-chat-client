import React from 'react';
import Words from './words.js';
import Form from './form.js';

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
        <Words words={this.state.words}/>
        <Form handleInboundWords={this.updateWords}/>
      </>
    );
  }
};