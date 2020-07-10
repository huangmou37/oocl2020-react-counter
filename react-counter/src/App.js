import React from 'react';
import './App.css';
import CounterGroup from "./components/CounterGroup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <CounterGroup size = {3}/>
      </header>
    </div>
  };
}

export default App;
