import React, { Component } from "react";

export default class UsingClass extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }

  increase = () => {
    let newCount = this.state.num + 1;
    this.setState({
      num: newCount,
    });
  };

  decrease = () => {
    let newCount = this.state.num - 1;
    this.setState({
      num: newCount,
    });
  };

  render() {
    return (
      <div className="box">
        <h2>Using Class Component</h2>
        <hr></hr>
        <h1>{this.state.num}</h1>
        <button onClick={this.decrease}>Decrement</button>
        <button onClick={this.increase}>Increment</button>
      </div>
    );
  }
}
