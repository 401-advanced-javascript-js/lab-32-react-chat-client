import React, {useContext} from 'react';

import { ChatContext } from '../context/chat-context';
import('./form.scss');

const Form = () => {
  const context = useContext(ChatContext);

  return (
    <>
      <div id="messageInput">
        <form onSubmit={context.handleSubmit} autoComplete="off">
          <input
            name="typedInput"
            placeholder="New Words"
            onChange={context.handleNewWords}
          />
        </form>
      </div>
    </>
  );
};

export default Form;
