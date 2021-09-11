import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const UseInputHook = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("", maxLen);
  return (
    <div className="container">
      <h1>
        Hello{name.value.length === 0 ? "" : ","} {name.value}
      </h1>
      <input
        type="text"
        placeholder="Name"
        value={name.value}
        onChange={name.onChange}
      />
    </div>
  );
};

export default UseInputHook;
