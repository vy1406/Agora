import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
      </div>
    );
  }
}

export default App;
