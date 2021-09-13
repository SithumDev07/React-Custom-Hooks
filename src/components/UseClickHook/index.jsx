import React, { useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current && typeof onClick === "function") {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current && typeof onClick === "function") {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const UseClickHook = () => {
  const sayHello = () => {
    title.current.classList.add("scale");
  };

  const title = useClick(sayHello);

  return (
    <div className="container">
      <h1 ref={title}>Hello</h1>
      <input type="text" placeholder="Say hello..." />
    </div>
  );
};

export default UseClickHook;
