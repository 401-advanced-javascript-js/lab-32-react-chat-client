import React, {useContext} from 'react';

import { ChatContext } from '../context/chat-context';
import('./words.scss');

const Words = () => {
  let context = useContext(ChatContext);

  let result = [];

  for (let i = 0; i < Math.min(15, context.words.length); i++) {
    result.push(<h3>{context.words[i]}</h3>);
  }

  return (
    <>
      <div id="messages">
        {result}
      </div>
    </>
  );
};

export default Words;
