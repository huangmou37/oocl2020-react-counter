import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.onChange = props.onChange;
    this.minusOne= this.minusOne.bind(this);
    this.plusOne= this.plusOne.bind(this);
  }

  minusOne() {
    this.setState({value: this.state.value - 1});
    this.onChange(-1);
  }

  plusOne() {
    this.setState({value: this.state.value + 1});
    this.onChange(1);
  }

  render() {
    return (
        <div>
          <button onClick={this.minusOne}>-</button>
          <label>{this.state.value}</label>
          <button onClick={this.plusOne}>+</button>
        </div>
    );
  }
}

export default Counter;