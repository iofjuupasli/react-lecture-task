import React from 'react';

const Button = ({onClick, children}) => (
   <input type="submit" onClick={onClick} value={children}/>
);

export default Button;
