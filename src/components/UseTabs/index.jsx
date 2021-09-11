import { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "Fact 1",
    content: "The sound of rain outside when u're in bed is elite",
  },
  {
    tab: "Fact 2",
    content:
      "I missed the times where Saturdays and Sundays were really considered as rest days",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const UseTabsHook = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="container">
      <h1>Hello</h1>
      <div className="buttonContainer">
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
      </div>
      <p>{currentItem.content}</p>
    </div>
  );
};

export default UseTabsHook;
