import { useState, useEffect } from "react";
import "./styles.css";

function UseEffectHook() {
  let Hello = "Hello";
  const [hello, setHello] = useState(Hello);

  const sayHello = () => {
    setTimeout(() => {
      setHello(hello.substring(0, hello.length - 1));
    }, 200);
  };

  useEffect(() => {
    if (hello.length > 0 && hello !== "Gummorning") {
      sayHello();
    } else {
      setHello("Gummorning");
    }
  }, [hello]);

  return (
    <div className="container">
      <h1>{hello}</h1>
    </div>
  );
}

export default UseEffectHook;
