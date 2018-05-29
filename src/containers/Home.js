import React, { Component } from 'react';
import MenuToggle from '../components/MenuToggle'
import MenuBar from '../components/Menubar'
import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenuBar: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({ showMenuBar: !this.state.showMenuBar })
  }

  render() {
    return (
      <div id='home'>
        <MenuToggle iconClass='fa fa-bars' onClick={this.handleClick} />
        {
          this.state.showMenuBar ?
          <MenuBar handleClick={this.handleClick} /> :
          null
        }
      </div>
    )
  }
}

export default Home