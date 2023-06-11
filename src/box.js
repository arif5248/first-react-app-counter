import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Box extends Component {
  state = {
    number: 7,
    buttonClassName: "btn btn-secondary",
  };

  constructor(props) {
    super(props);
  }

  increment = () => {
    this.props.onIncrement(this.props.index);
    const newState = {
      number: this.props.number,
      buttonClassName: "btn btn-dark",
    };
    this.setState(newState);
  };

  decrement = () => {
    const number = this.props.number;
    if (number === 0) {
      const newButtonClassName = "btn btn-secondary";
      const newState = {
        number: this.props.number,
        buttonClassName: newButtonClassName,
      };
      this.setState(newState);
    } else if (number === 1) {
      const newButtonClassName = "btn btn-secondary";
      const newState = {
        number: this.props.onDecrement(this.props.index),
        buttonClassName: newButtonClassName,
      };
      this.setState(newState);
    } else {
      const newState = { number: this.props.onDecrement(this.props.index) };
      this.setState(newState);
    }
  };

  deleteCounter = () => {
    const boxNumber = this.props.index + 1;
    alert("Do you want to delete COUNTER " + boxNumber + "...???");
    const id = this.props.index;
    this.props.onDelete(id);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className={this.state.buttonClassName}
          onClick={this.decrement}
        >
          -
        </button>
        <span className="p-2">{this.props.number}</span>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.increment}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={this.deleteCounter}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Box;
