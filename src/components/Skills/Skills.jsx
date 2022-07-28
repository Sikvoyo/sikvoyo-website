import React from 'react';
import Skill from './Skill/Skill';
import './Skills.css'

import skillsJSON from '../../jsons/skills.json';

const Skills = (props) => {
   const skillArray = skillsJSON.skills;

   const skillList = skillArray.map((icon, index) => {
      return <Skill name={icon.name} image={icon.icon} hoverChange={props.hoverChange} key={index}/>
   })

   return(
      <div id="skillList" className="not-affect">
         <h1>Skills</h1>
         <h2>(sorted by confidence)</h2>
         <div id="skillSize">
            {skillList}
         </div>
      </div>
   );
}

export default Skills;