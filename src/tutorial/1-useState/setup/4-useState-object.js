import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "Random message",
  });
  const changeMessage = () => {
    setPerson({...person, message: 'Hello world'})
  }
  return <>
    <h4>{person.name}</h4>
    <h4>{person.age}</h4>
    <h4>{person.message}</h4>
    <div className="btn" onClick={changeMessage}>Change message</div>
  </>;
};

export default UseStateObject;
