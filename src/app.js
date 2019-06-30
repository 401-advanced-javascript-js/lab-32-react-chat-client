import React from 'react';
import Words from './components/words/words';
import Form from './components/form/form';

import ChatContextProvider from './components/context/chat-context';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ChatContextProvider>
          <Words />
          <Form />
        </ChatContextProvider>
      </>
    );
  }
};