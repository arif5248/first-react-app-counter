import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Box from "./box";

class App extends Component {
  state = {
    boxes: [],
  };

  createNewCounter = () => {
    const { boxes } = this.state;
    this.setState({ boxes: [...boxes, 0] });
  };

  onIncrement = (id) => {
    const arr = [...this.state.boxes];
    arr[id]++;
    this.setState({ boxes: arr });
  };

  onDecrement = (id) => {
    const arr = [...this.state.boxes];
    arr[id]--;
    this.setState({ boxes: arr });
  };

  onDelete = (id) => {
    const updatedboxes = this.state.boxes.filter((number, index) => {
      if (id === index) return false;
      else return true;
    });
    this.setState({ boxes: updatedboxes });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.createNewCounter}
        >
          Add New Counter
        </button>
        <br />
        <br />

        {this.state.boxes.map((number, index) => (
          <div key={index}>
            <Box
              number={number}
              index={index}
              onDelete={this.onDelete}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
            />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
