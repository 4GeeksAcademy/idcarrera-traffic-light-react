import React, { useState } from "react";
import "../../styles/index.css";

const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState("");

  return (
    <div className="traffic-wrapper">
      <div className="traffic-container">
        <div
          className={`light red ${activeColor === "red" ? "glow" : ""}`}
          onClick={() => setActiveColor("red")}
        ></div>
        <div
          className={`light yellow ${activeColor === "yellow" ? "glow" : ""}`}
          onClick={() => setActiveColor("yellow")}
        ></div>
        <div
          className={`light green ${activeColor === "green" ? "glow" : ""}`}
          onClick={() => setActiveColor("green")}
        ></div>
      </div>

      <div className="controls">
        <button className="off-button" onClick={() => setActiveColor("")}>
          Apagar
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
