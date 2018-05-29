import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MenuToggle from './MenuToggle'
import './Menubar.scss'

class Menubar extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={250}
        transitionEnter={false}
        transitionLeave={false}>
        <div id='menubar'>
          <MenuToggle iconClass='fa fa-remove' onClick={this.props.handleClick}/>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Menubar;