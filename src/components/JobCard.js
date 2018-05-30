import React, { PureComponent } from 'react'
import './JobCard.scss'

class JobCard extends PureComponent {
  handleClick(url) {
    window.open(url, 'blank')
  }

  render(){
    return(
      <div class='job-card' onClick={() => this.handleClick(this.props.url)}>
        <div class='job-title'>{this.props.title}</div>
        <div class='job-company'>{this.props.company}</div>
        <div class='job-time'>{this.props.time}</div>
        <p class='job-text'>{this.props.text}</p>
      </div>
    )
  }
}

export default JobCard