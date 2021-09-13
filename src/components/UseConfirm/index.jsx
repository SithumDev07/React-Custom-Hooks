import { useRef } from "react";
import "./styles.css";

const useConfirm = (message = "", callBack) => {
  if (typeof callBack !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      callBack();
    }
  };
  return confirmAction;
};

function UseConfirm() {
  const hello = useRef();
  const sayBye = () => {
    hello.current.innerText = "Bye!";
  };

  const confirmBye = useConfirm("Are u sure?", sayBye);

  return (
    <div className="container">
      <h1 onClick={confirmBye} ref={hello}>
        Hello
      </h1>
    </div>
  );
}

export default UseConfirm;
