import React, { useState } from "react";
import "./styles.css";

function UseStateHook() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => {
    if (item >= 1) {
      setItem(item - 1);
    }
  };
  return (
    <div className="container">
      <h1>Hello</h1>
      <p>My Number - {item}</p>
      <div className="buttonContainer">
        <button onClick={incrementItem}>Increment</button>
        <button onClick={decrementItem}>Decrement</button>
      </div>
    </div>
  );
}

export default UseStateHook;
