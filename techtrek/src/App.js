import './App.css';
import React, { Component } from 'react';
import Balance from './balance';

class App extends Component {
  render() {
    return (
        <Balance balance={this.state} />
    )
  }
}

export default App
