import React, { PureComponent } from 'react';
import './Contact.scss'

class Contact extends PureComponent {
  render() {
    return(
      <div id='contact'>
        <h2>Contact</h2>
        <hr />
        <p><i class='fa fa-envelope icon'></i> <a href='mailto:yowiputra@gmail.com'>yowiputra@gmail.com</a></p>
        <p><i class='fa fa-map-marker icon'></i> Vancouver, BC</p>
      </div>
    )
  }
}

export default Contact
