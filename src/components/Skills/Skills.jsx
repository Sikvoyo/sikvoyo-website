import React from 'react';
import Skill from './Skill/Skill';

import skillsJSON from '../../jsons/skills.json';

const Skills = (props) => {
   const skillArray = skillsJSON.skills;

   const skillList = skillArray.map((icon, index) => {
      return <Skill name={icon.name} image={icon.icon} hoverChange={props.hoverChange}/>
   })
}

export default Skills;