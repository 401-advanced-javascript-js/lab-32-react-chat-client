import React, {useContext} from 'react';

import { ChatContext } from './context/chat-context';

const Form = () => {
  const context = useContext(ChatContext);

  return (
    <>
      <form onSubmit={context.handleSubmit}>
        <input
          name="typedInput"
          placeholder="New Words"
          onChange={context.handleNewWords}
        />
      </form>
    </>
  );
};

export default Form;
