import { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function UseTitleHook() {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => {
    titleUpdater("Home");
  }, 2000);

  return (
    <div className="container">
      <h1>Hello</h1>
    </div>
  );
}

export default UseTitleHook;
