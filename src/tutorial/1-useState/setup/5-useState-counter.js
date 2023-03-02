import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: "4rem 0 " }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <div className="btn" onClick={() => setValue(value -1 )}>Decrease</div>
        <div className="btn" onClick={reset}>Reset</div>
        <div className="btn" onClick={() => setValue(value + 1)}>Increase</div>
      </section>
      
      <section style={{ margin: "4rem 0 " }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Complex Increase</button>
      </section>
    </>
  );
};

export default UseStateCounter;
