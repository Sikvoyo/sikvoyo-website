import React from 'react';
import './Button.css';

const Button = (props) => {
   const {buttonText, click} = props;

   return(
      <button onClick={click}>
         <p>{buttonText}</p>
      </button>
   );
}

export default Button;