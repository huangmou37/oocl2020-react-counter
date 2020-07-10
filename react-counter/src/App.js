import React from 'react';
import './App.css';
import Counter from "./components/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  };
}

export default App;
