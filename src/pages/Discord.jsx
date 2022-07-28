import React from 'react';
import './Discord.css';
import Button from '../components/Button/Button';

const Discord = (props) => {

   const {navigateHome} = props;

   return(
   <>
      <div id='discordContainer'>
         <h1 id='discordH1'>sikvoyø#1992</h1>
         <Button buttonText="Go back" click={navigateHome}/>
      </div>
   </>
   );
}

export default Discord;