import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random title");
  const handlerClick = () => {
    if (text === "random title") {
      setText("Hello world!");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handlerClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
