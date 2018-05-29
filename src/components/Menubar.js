import React, { PureComponent } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MenuToggle from './MenuToggle'
import './Menubar.scss'

class Menubar extends PureComponent {
  createLinks(tag, text) {
    return(
      <a class='bar-block' href={tag} onClick={this.props.handleClick}>{text}</a>
    )
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div id='menubar'>
          <MenuToggle iconClass='fa fa-remove' onClick={this.props.handleClick}/>
          <div class='menu-container'>
            {this.createLinks('#home', 'Home')}
            {this.createLinks('#portfolio', 'Portfolio')}
            {this.createLinks('#about', 'About')}
            {this.createLinks('#skills', 'Skills')}
            {this.createLinks('#contact', 'Contact')}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Menubar;