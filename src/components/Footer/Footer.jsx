import React from "react";
import './Footer.css';

const iconsJSON = require('../../jsons/icons.json');

const Footer = () => {
   const links = iconsJSON.icons;

   const linksArray = links.map((icon, index) => {
      return <a className="hover-w" href={icon.link} key={index}><p>{icon.name}</p></a>
   })

   return(
      <footer className="not-affect">
         <p>If you are reading this, have a nice day! {"<3"}</p>
         <a href="https://github.com/Sikvoyo/sikvoyo-website"><p>GitHub repo of this website</p></a>
         <div id="linksArray">
            {linksArray}
         </div>
      </footer>
   );
}

export default Footer;