import React, { PureComponent } from 'react'
import './JobCard.scss'

class JobCard extends PureComponent {
  render(){
    return(
      <div class='job-card'>
        <div class='job-title'>{this.props.title}</div>
        <div class='job-company'>{this.props.company}</div>
        <div class='job-time'>{this.props.time}</div>
        <p class='job-text'>{this.props.text}</p>
      </div>
    )
  }
}

export default JobCard