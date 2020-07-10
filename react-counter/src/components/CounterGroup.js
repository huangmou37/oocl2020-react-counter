import React from 'react';
import Counter from "./Counter";

class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {totalValue: 0};
    this.updateTotalValue = this.updateTotalValue.bind(this);
  }

  updateTotalValue(delta) {
    this.setState({ totalValue: this.state.totalValue + delta });
  }

  render() {
    return (
        <div>
          <div>
            { Array(this.props.size).fill(<Counter onChange = {this.updateTotalValue}/>) }
          </div>
          <p>Total: {this.state.totalValue}</p>
        </div>
    );
  }
}

export default CounterGroup;