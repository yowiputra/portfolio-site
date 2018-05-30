import React, { PureComponent } from 'react';
import './Skills.scss'

class Skills extends PureComponent {
  createSkill(title, level){
    const style = {width: level}
    return(
      <div class='skill'>
        <p class='skill-title'>{title}</p>
        <div class='skill-bar-bg'>
          <div class='skill-bar' style={style}>{level}</div>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div id='skills'>
        <h2>Skills</h2>
        <hr />
        {this.createSkill('React / Redux', '85%')}
        {this.createSkill('JavaScript', '85%')}
        {this.createSkill('HTML5 & CSS3', '75%')}
        {this.createSkill('TypeScript', '70%')}
        {this.createSkill('AWS', '60%')}
        {this.createSkill('Python', '50%')}
        {this.createSkill('React Native', '40%')}
        {this.createSkill('MVC Frameworks (Laravel, Ruby on Rails, Django)', '40%')}
      </div>
    )
  }
}

export default Skills
