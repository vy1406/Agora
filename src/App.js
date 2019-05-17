import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import Market from './components/Market';
import NewItem from './components/NewItem'

@observer
class App extends Component {

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = () => this.props.store.addItem(this.state.newItem)

  render() {
    return (
      <div className="App">

        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        <Market store={this.props.store} />
        <DevTools />
      </div>
    );
  }
}

export default App;
