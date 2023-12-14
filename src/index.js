import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Function to define Step Component
function App() {
  return <DateCounter />;
}

// Function to define Date counter component
function DateCounter() {
  //State to define counter
  const [count, setCount] = useState(0);

  //State to define step
  const [step, setStep] = useState(1);

  //Function to handle minus button
  const handleClickMinus = () => {
    setCount(count - step);
  };

  //Function to handle minus button
  const handleClickPlus = () => {
    setCount(count + step);
  };

  //Function to handle input range
  const handleSlider = (event) => {
    setStep(Number(event.target.value));
  };

  //Function handle text input
  const handleText = (event) => {
    setCount(Number(event.target.value));
  };

  //Function handle reset
  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div className="slider">
        <input
          type="range"
          min={0}
          max={10}
          onChange={handleSlider}
          value={step}
        />
        <span>Step : {step}</span>
      </div>
      <div>
        <button onClick={handleClickMinus}>-</button>
        <input type="text" value={count} onChange={handleText} />
        <button onClick={handleClickPlus}>+</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
