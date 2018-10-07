import React from "react";
import ReactDOM from "react-dom";

import { Die, rolldice } from "./dice.js";

export class BidInterface extends React.Component {
  state = {
    dice: [6, 6, 6],
    selected: 5
  };

  render() {
    let dice = () => {
      let array = [];
      let dice = this.state.dice;
      for (var i = 0; i < dice.length; i++) {
        if (i % 2 == 1) {
          array.push(
            <Die pips={dice[i]} pipIcon={"⚫️"} style={{ gridRowStart: "2" }} />
          );
        } else {
          array.push(
            <Die pips={dice[i]} pipIcon={"⚫️"} style={{ gridRowStart: "1" }} />
          );
        }
      }
      return array;
    };

    return (
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
          {dice()}
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
              overflow: "hidden"
            }}
          >
            <div
              class="number"
              id={this.state.selected == 1 ? "selected" : null}
              onClick={() => this.setState({ selected: 1 })}
            >
              1
            </div>
            <div
              class="number"
              id={this.state.selected == 2 ? "selected" : null}
              onClick={() => this.setState({ selected: 2 })}
            >
              2
            </div>
            <div
              class="number"
              id={this.state.selected == 3 ? "selected" : null}
              onClick={() => this.setState({ selected: 3 })}
            >
              3
            </div>
            <div
              class="number"
              id={this.state.selected == 4 ? "selected" : null}
              onClick={() => this.setState({ selected: 4 })}
            >
              4
            </div>
            <div
              class="number"
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
              width: "200px",
              height: "50px",
              gridColumnStart: "2",
              fontSize: "2rem",
              boxShadow: "0px 3px rgb(76, 136, 232)",
              margin: "15px",
              background: "rgba(76, 136, 232, .3)"
            }}
          >
            roll {this.state.selected} dice
          </div>
        </div>
      </div>
    );
  }
}
