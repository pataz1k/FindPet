import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ to, children,onClick,style, type }) => {
  return (
    <Link onClick={onClick} type={type}  to={to} className={'button-style ' + style}>
      {children}
    </Link>
  );
};

export default Button;
