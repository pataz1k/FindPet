import { Link } from 'react-router-dom';
import './Button.css';
import { FC, MouseEventHandler } from 'react';

type Button = {
  to?:string,
  children: any,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
  style: string,
}

const Button:FC<Button> = ({ to, children, onClick, style}) => {
  return (
    <Link onClick={onClick} to={to? to: ''} className={'button-style ' + style}>
      {children}
    </Link>
  );
};

export default Button;
