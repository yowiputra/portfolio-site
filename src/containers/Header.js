import React, { PureComponent } from 'react';
import './Header.scss'

class Header extends PureComponent {
  handleLink = () => {
    window.location.href = 'https://www.visualcv.com/yohan-wiputra/pdf'
  }

  render() {
    return(
      <div id='header'>
        <h1>Yohan Wiputra</h1>
        <p>Web Developer</p>
        <button onClick={this.handleLink}>
          <i class='fa fa-download'></i> Download Resume
        </button>
      </div>
    )
  }
}

export default Header
