import React, { PureComponent } from 'react'
import JobCard from '../components/JobCard'
import './Experience.scss'

class Projects extends PureComponent {
  render(){
    return(
      <div id='projects' class='experience'>
        <h2>Projects</h2>
        <hr />
        <div class='column left'>
          <JobCard title='Scratch'
                  company='Personal Project'
                  time='May 2018 - May 2018'
                  url='https://dtndipmofp983.cloudfront.net/'
                  text='Notes app written with on React with a serverless REST API built using AWS API Gateway, Lambda and DynamoDB'/>
        </div>
        <div class='column right'>
          <JobCard title='BuddyUp'
                  company='Lighthouse Labs Final Project'
                  time='Aug 2017 - Aug 2017'
                  url='https://github.com/yowiputra/BuddyUp'
                  text='MOBA game match-making web application built on React, Redux, PostgreSQL, Express, Socket.io and Node.js with a Tinder-style UI.'/>
        </div>
      </div>
    )
  }
}

export default Projects