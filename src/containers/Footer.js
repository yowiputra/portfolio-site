import React, { PureComponent } from 'react';
import './Footer.scss'

class Footer extends PureComponent {
  render(){
    return(
      <div id='footer'>
        <a class='icon' href='https://www.linkedin.com/in/yohan-wiputra-61a4478a/'><i class='fa fa-linkedin'></i></a>
        <span> </span>
        <a class='icon' href='https://github.com/yowiputra'><i class='fa fa-github icon'></i></a>
      </div>
    )
  }
}

export default Footer