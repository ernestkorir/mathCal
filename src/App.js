import React, { Component } from 'react';
import './App.css';
import Calculator from './component/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
export default App;