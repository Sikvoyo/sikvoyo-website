import React from 'react';
import './Discord.css';
import Button from '../../components/Button/Button';

const Discord = (props) => {

   const discordNickname = 'kvvoya#2445'

   const {navigateHome} = props;

   return(
   <>
      <div id='discordContainer'>
         <h1 id='discordH1'>{discordNickname}</h1>
         <Button buttonText="Go back" click={navigateHome}/>
      </div>
   </>
   );
}

export default Discord;