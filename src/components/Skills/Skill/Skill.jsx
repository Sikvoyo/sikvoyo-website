import React from "react";
import './Skill.css';
import Zoom from 'react-reveal/Zoom';
import {DEFAULT_BG_TEXT} from '../../../consts';

const Skill = (props) => {
   const {hoverChange, name, image} = props;

   return(
      <>
         <Zoom duration={750}>
            <span onMouseOver={() => hoverChange(name)} onMouseLeave={() => hoverChange(DEFAULT_BG_TEXT)}>
               <img src={require(`../../../img/icons/${image}`)} alt={name}/>
            </span>
         </Zoom>
      </>
   );
}

export default Skill;