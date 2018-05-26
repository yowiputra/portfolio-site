import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Menubar from './components/Menubar'
import Home from './containers/Home'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Menubar />
        <Home />
      </div>
    );
  }
}

export default App;
