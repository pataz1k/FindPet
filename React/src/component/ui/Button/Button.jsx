import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ to, children,onClick,style}) => {
  return (
    <Link onClick={onClick} to={to} className={'button-style ' + style}>
      {children}
    </Link>
  );
};

export default Button;
