import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../ui/Button/Button';
import inputImage from '../../assets/input-icon.svg'
import './Header.css';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const [input, setInput] = useState("");
  const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
      <>
        <header>
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link to={'/advertisement'}>Объявления</Link>
          <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} src={inputImage} placeholder='Адрес, номер объявления, порода и пр.' className='input'/>
          <Button to="/create-ad" style={"button-default"}>Создать Объявление</Button>
          {!isAuth ? <Link to={'/auth'}>Войти</Link>: <Link to={'/profile'}>Профиль</Link>}
        </header>
      </>
    )


}

export default Header