import React, { PureComponent } from 'react';
import './MenuToggle.scss'

class MenuToggle extends PureComponent {
  render() {
    return (
      <span class='menu-toggle' onClick={this.props.onClick}>
        <i class={this.props.iconClass}></i>
      </span>
    )
  }
}

export default MenuToggle