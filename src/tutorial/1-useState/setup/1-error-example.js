import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title'
  const handleClick = () => {
    title = 'New title'
    console.log(title);
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className='btn' type='button' onClick={handleClick}>Change the title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
