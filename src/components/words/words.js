import React, {useContext} from 'react';

import { ChatContext } from '../context/chat-context';

const Words = () => {
  let context = useContext(ChatContext);

  let result = [];

  for (let i = Math.max(0, context.words.length - 15); i < context.words.length; i++) {
    result.push(<h3>{context.words[i]}</h3>);
  }

  return <>{result}</>;
};

export default Words;
