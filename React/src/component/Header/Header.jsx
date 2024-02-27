import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../ui/Button/Button';
import inputImage from '../../assets/input-icon.svg'
import { AuthContext } from '../../context/AuthContext';
import classes from './Header.module.css'
import menu from '../../assets/menu.svg'

const Header = () => {
  const [input, setInput] = useState("");
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [isOpen,setIsOpen] = useState('400px')

  function openModal() {
    console.log(isOpen)
    if (isOpen == '0px') {
      setIsOpen('400px')
    } else if (isOpen == '400px') {
      setIsOpen('0px')
    }
  }
    return (
      <div className={classes.headerBack}>
      <button className={classes.menu} onClick={openModal}> <img src={menu} alt="" /></button>
      <div className={classes.headerWrap}  style={{ maxHeight:`${isOpen}` }}>
        <div className={classes.header}>
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link to={'/advertisement'}>Объявления</Link>
          <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} src={inputImage} placeholder='Адрес, номер объявления, порода и пр.' className={classes.input}/>
          <Button to="/create-ad" style={"button-default"}>Создать Объявление</Button>
          {!isAuth ? <Link to={'/auth'}>Войти</Link>: <Link to={'/profile'}>Профиль</Link>}
        </div>
      </div>
      </div>
    )


}

export default Header