import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div>
          <span className="m-2">{this.props.name}</span>
          <span className="badge badge-pill badge-info">{this.props.value}</span>
          <button onClick={() => this.props.onIncrement(this.props.counter)} type="button" className="btn m-2 btn-primary">+</button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} type="button" className="btn m-2 btn-danger" disabled = {this.props.value === 0 ? "disabled" : null}>-</button>
          <button onClick={() => this.props.onDelete(this.props.id)} type="button" className="btn m-2 btn-dark">Delete</button>
        </div>
    )
  };

};
export default Counter;