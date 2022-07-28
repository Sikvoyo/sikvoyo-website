import React from "react";
import './Skill.css';
import {DEFAULT_BG_TEXT} from '../../../consts';

const Skill = (props) => {
   const {hoverChange, name, image} = props;

   return(
      <>
         <span onMouseOver={() => hoverChange(name)} onMouseLeave={() => hoverChange(DEFAULT_BG_TEXT)}>
            <img src={require(`../../../img/icons/${image}`)} alt={name}/>
         </span>
      </>
   );
}

export default Skill;