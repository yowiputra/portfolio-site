import React, { PureComponent } from 'react';
import MenuToggle from '../components/MenuToggle'
import './Home.scss'

class Home extends PureComponent {
  handleClick = () => {
    document.getElementById('menubar').style.display = 'block'
  }

  render() {
    return (
      <div id='home'>
        <MenuToggle iconClass='fa fa-bars' onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Home