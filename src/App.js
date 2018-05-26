import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Home from './containers/Home'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Home />
      </div>
    );
  }
}

export default App;
