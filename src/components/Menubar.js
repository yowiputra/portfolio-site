import React, { PureComponent } from 'react';
import MenuToggle from './MenuToggle'
import './Menubar.scss'

class Menubar extends PureComponent {
  handleClick = () => {
    document.getElementById('menubar').style.display = 'none'
  }

  render() {
    return (
      <div id='menubar'>
        <MenuToggle iconClass='fa fa-remove' onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Menubar;