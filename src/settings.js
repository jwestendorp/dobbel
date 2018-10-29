import React from "react";
import ReactDOM from "react-dom";

import { Pip } from "./dice.js";

export function Settings(props) {
  return (
    <div
      style={{
        border: "solid 1px",
        position: "absolute",
        bottom: "10px",
        width: "90%",
        height: "60%",
        left: "5%",
        boxSizing: "border-box",
        padding: "0px 15px 0px 15px ",
        background: "white",
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr 2fr 1fr 1fr 1fr 2fr"
      }}
    >
      <div style={{ gridRowStart: "1", fontSize: "3.3vw", paddingTop: "10px" }}>
        Settings:
      </div>
      <div
        style={{
          fontSize: "5vw",
          position: "absolute",
          top: "5px",
          right: "5px"
        }}
        onClick={() => props.close()}
      >
        ✖️
      </div>

      <div style={{ gridRowStart: "3", fontSize: "2.5vw" }}>color</div>
      <div
        id="colors"
        style={{
          gridRowStart: "4",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        }}
      >
        <div
          style={{ background: "red", width: "80%" }}
          onClick={() => props.changeColor("red")}
        />
        <div
          style={{ background: "blue", width: "80%" }}
          onClick={() => props.changeColor("blue")}
        />
        <div
          style={{ background: "yellow", width: "80%" }}
          onClick={() => props.changeColor("yellow")}
        />
        <div
          style={{ background: "green", width: "80%" }}
          onClick={() => props.changeColor("green")}
        />
        <div
          style={{ background: "orange", width: "80%" }}
          onClick={() => props.changeColor("orange")}
        />
        <div
          style={{ background: "purple", width: "80%" }}
          onClick={() => props.changeColor("purple")}
        />
        <div
          style={{ background: "black", width: "80%" }}
          onClick={() => props.changeColor("black")}
        />
        <div
          style={{ background: "grey", width: "80%" }}
          onClick={() => props.changeColor("grey")}
        />
        <div
          style={{
            background: "white",
            width: "80%",

            border: "black solid 1px"
          }}
          onClick={() => props.changeColor("white")}
        />
      </div>
      <div style={{ gridRowStart: "7", fontSize: "2.5vw" }}>pip icon</div>
      <div
        style={{
          gridRowStart: "8",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        }}
      >
        <Pip pipIcon="⚫️" c={1} r={1} onClick={() => props.changePip("⚫️")} />
        <Pip pipIcon="⚪️" c={2} r={1} onClick={() => props.changePip("⚪️")} />
        <Pip pipIcon="💩" c={3} r={1} onClick={() => props.changePip("💩️")} />
        <Pip pipIcon="🎲" c={4} r={1} onClick={() => props.changePip("🎲")} />
        <Pip pipIcon="💲" c={5} r={1} onClick={() => props.changePip("💲")} />
        <Pip pipIcon="🍺" c={6} r={1} onClick={() => props.changePip("🍺")} />
        <Pip pipIcon="🔥" c={7} r={1} onClick={() => props.changePip("🔥")} />
        <Pip pipIcon="❄️" c={8} r={1} onClick={() => props.changePip("❄️")} />
        <Pip pipIcon="🎵" c={9} r={1} onClick={() => props.changePip("🎵")} />
      </div>
    </div>
  );
}
