import React from 'react';

const Words = props => {

  let result = []; 

  for (let i = Math.max(0, props.words.length - 15); i < props.words.length; i++) {
    result.push(<h3>{props.words[i]}</h3>);
  }

  return <>{result}</>;
};

export default Words;
