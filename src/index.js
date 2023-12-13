import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <Counter />;
}

function Counter() {
  return (
    <div>
      <button>-</button>
      <input type="text" />
      <button>+</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
