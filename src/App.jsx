import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    const newCount = count + 1;
    setCount(newCount);
  }

  function decrease() {
    const newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  }

  return (
    <div>
      <h1 className="headingStyle">Manual Counter</h1>
      <h2 className="counting">{count}</h2>
      <button className="buttonStyling" onClick={increase} type="submit">
        +
      </button>
      <button className="buttonStyling" onClick={decrease} type="submit">
        -
      </button>
    </div>
  );
}

export default App;
