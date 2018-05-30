import React, { Component } from 'react';
import MenuToggle from '../components/MenuToggle'
import MenuBar from '../components/Menubar'
import Header from './Header'
import MyPortfolio from './MyPortfolio'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
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
        <div class='home-container'>
          <Header />
          <About />
          <MyPortfolio />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home