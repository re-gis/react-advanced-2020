import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>Value: {secondValue}</h2> */}
      <h2>{text || "John Doe"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Error Toggling...
      </button>
      {isError && <h2>Error...</h2>}
      {/* ternary operator */}
      {isError ? (
        <h2>There is an error...</h2>
      ) : (
        <div>
          <h2>There is no error...</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
