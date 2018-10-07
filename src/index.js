import React from "react";
import ReactDOM from "react-dom";

import { Die } from "./dice.js";
import { BidInterface } from "./interface.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BidInterface />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
