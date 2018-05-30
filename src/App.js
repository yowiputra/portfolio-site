import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Sidebar from './components/Sidebar'
import Home from './containers/Home'
import './App.scss';

class App extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="home-fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="App">
          <Sidebar />
          <Home />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default App;
