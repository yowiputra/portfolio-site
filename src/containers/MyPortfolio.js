import React, { PureComponent } from 'react'
import JobCard from '../components/JobCard'
import './MyPortfolio.scss'

class MyPortfolio extends PureComponent {
  render(){
    return(
      <div id='portfolio'>
        <h2>Experience</h2>
        <hr />
        <div class='column left'>
          <JobCard title='Junior Software Developer'
                  company='GoFetch.ca'
                  time='Sept 2017 - Apr 2018'
                  text='Full time position as a full stack web developer, working with a ReactJS front-end and a NodeJS / Express / TypeScript / MySQL back-end. Involved in DevOps related roles as well using AWS, Travis CI and Netlify.'/>
        </div>
        <div class='column right'>
          <JobCard title='Research Software Developer'
                  company='Frostad Research Group - UBC'
                  time='Sept 2016 - June 2017'
                  text='Part-time Position. Co-developed a research software architecture in Python 2.7.10 for measuring surface tension of a liquid / air system by processing the image of a drop of the liquid hanging from a capillary tube.'/>
        </div>
      </div>
    )
  }
}

export default MyPortfolio