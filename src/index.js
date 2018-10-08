import React from "react";
import ReactDOM from "react-dom";

import { Die, rolldice } from "./dice.js";

import "./styles.css";

class App extends React.Component {
  // App displays:
  // > dice:
  //   maps dice array in state to <Die> components
  // > button interface:
  //   generates new dice array with user input
  //   shows currently selected amount of dice to roll
  state = {
    dice: [6, 6, 6],
    selected: 5
  };
  render() {
    return (
      <div className="App">
        <div
          align="center"
          style={{
            overflow: "hidden"
          }}
        >
          <div
            id="dice"
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridRowGap: "15px",
              paddingTop: "15px"
            }}
          >
            {this.state.dice.map(d => <Die pips={d} pipIcon={"⚫️"} />)}
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              bottom: "0px",
              overflow: "hidden",
              background: "linear-Gradient(30deg, #bbffe8, #3a99b5)"
            }}
          >
            <div
              align="center"
              style={{
                display: "flex",
                overflow: "hidden"
              }}
            />
            <hr />
            <div
              id="row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                overflow: "hidden",
                fontSize: "3.8vw"
              }}
            >
              <div
                id={this.state.selected == 1 ? "selected" : null}
                onClick={() => this.setState({ selected: 1 })}
              >
                1
              </div>
              <div
                id={this.state.selected == 2 ? "selected" : null}
                onClick={() => this.setState({ selected: 2 })}
              >
                2
              </div>
              <div
                id={this.state.selected == 3 ? "selected" : null}
                onClick={() => this.setState({ selected: 3 })}
              >
                3
              </div>
              <div
                id={this.state.selected == 4 ? "selected" : null}
                onClick={() => this.setState({ selected: 4 })}
              >
                4
              </div>
              <div
                id={this.state.selected == 5 ? "selected" : null}
                onClick={() => this.setState({ selected: 5 })}
              >
                5
              </div>
            </div>
            <hr />

            <div
              onClick={() =>
                this.setState({ dice: rolldice(this.state.selected) })
              }
              style={{
                border: "solid rgb(76, 136, 232) 1px",
                padding: "5px",
                borderRadius: "10%",
                width: "40vw",
                gridColumnStart: "2",
                fontSize: "6vw",
                boxShadow: "0px 3px rgb(76, 136, 232)",
                margin: "15px",
                background: "rgba(76, 136, 232, .3)"
              }}
            >
              roll {this.state.selected} dice
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
