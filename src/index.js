import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <Counter />;
}

function Counter() {
  //State to define counter
  const [count, setCount] = useState(1);

  //Function to handle minus button
  const handleClickMinus = () => {
    setCount(count - 1);
  };

  //Function to handle minus button
  const handleClickPlus = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClickMinus}>-</button>
      <input type="text" value={count} />
      <button onClick={handleClickPlus}>+</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
