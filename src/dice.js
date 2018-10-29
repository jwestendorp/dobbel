import React from "react";
import ReactDOM from "react-dom";

export let rolldice = function(amount) {
  // Returns an array of lenght 'amount' containing dice values

  let diceArray = [];

  for (var i = 0; i < amount; i += 1) {
    diceArray.push(Math.floor(Math.random() * 6) + 1);
  }
  console.log(diceArray);
  return diceArray;
};

export function Pip(props) {
  // Component for diplaying dots on a die
  // use emoji to dispay as pip icon

  return (
    <div
      onClick={c => (props.onClick != undefined ? props.onClick(c) : null)}
      style={{
        gridRowStart: props.r,
        gridColumnStart: props.c,
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: "3.3vw"
      }}
    >
      {props.pipIcon}
    </div>
  );
}

export class Die extends React.Component {
  // takes a pip property (number from 1 to 6)
  // and creates visual dice representation with <Pip> components

  constructor(props) {
    super(props);
  }

  render() {
    let pips = () => {
      switch (this.props.pips) {
        case 1:
          return (
            <React.Fragment>
              <Pip c={2} r={2} pipIcon={this.props.pipIcon} />
            </React.Fragment>
          );
        case 2:
          return (
            <React.Fragment>
              <Pip c={1} r={1} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={3} pipIcon={this.props.pipIcon} />
            </React.Fragment>
          );
        case 3:
          return (
            <React.Fragment>
              <Pip c={1} r={1} pipIcon={this.props.pipIcon} />
              <Pip c={2} r={2} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={3} pipIcon={this.props.pipIcon} />
            </React.Fragment>
          );
        case 4:
          return (
            <React.Fragment>
              <Pip c={1} r={1} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={3} pipIcon={this.props.pipIcon} />
              <Pip c={1} r={3} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={1} pipIcon={this.props.pipIcon} />
            </React.Fragment>
          );
        case 5:
          return (
            <React.Fragment>
              <Pip c={1} r={1} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={3} pipIcon={this.props.pipIcon} />
              <Pip c={2} r={2} pipIcon={this.props.pipIcon} />
              <Pip c={1} r={3} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={1} pipIcon={this.props.pipIcon} />
            </React.Fragment>
          );
        case 6:
          return (
            <React.Fragment>
              <Pip c={1} r={1} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={3} pipIcon={this.props.pipIcon} />
              <Pip c={1} r={2} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={2} pipIcon={this.props.pipIcon} />
              <Pip c={1} r={3} pipIcon={this.props.pipIcon} />
              <Pip c={3} r={1} pipIcon={this.props.pipIcon} />
            </React.Fragment>
          );
      }
    };

    return (
      <div
        style={{
          border: "solid black 1px",
          borderRadius: "10%",
          width: "15vw",
          height: "15vw",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          background: "white",
          padding: "2%",
          background: this.props.color
        }}
      >
        {pips()}
      </div>
    );
  }
}
