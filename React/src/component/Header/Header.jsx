import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../ui/Button/Button';

import { AuthContext } from '../../context/AuthContext';
import classes from './Header.module.css'
import menu from '../../assets/menu.svg'
import Search from '../ui/Search/Search';
import PetsList from '../PetsList/PetsList';

const Header = ({searchItems}) => {
  const [input, setInput] = useState("");
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [isOpen,setIsOpen] = useState(classes.headerWrap)

  const [searchRes, setSearchRes] = useState([])

  function openModal() {

    if (isOpen == classes.headerWrapOpen) {
      setIsOpen(classes.headerWrap)
    } else {
      setIsOpen(classes.headerWrapOpen)
    }
  }
    return (
      <>
      <div className={classes.headerBack}>
      <div className={classes.menuWrap}><button className={classes.menu} onClick={openModal}> <img src={menu} alt="" /></button></div>
      <div className={isOpen}>
        <div className={classes.header}>
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link to={'/advertisement'}>Объявления</Link>
          <Search setData={setSearchRes} APIData={searchItems}/>
          <Button to="/create-ad" style={"button-default"}>Создать Объявление</Button>
          {!isAuth ? <Link to={'/auth'}>Войти</Link>: <Link to={'/profile'}>Профиль</Link>}
        </div>
      </div>
      </div>
      {searchRes.length !== 0 &&
        <div className={classes.searchResults}>
          <div className={classes.resultWrap}>
            <PetsList petsArr={searchRes} rows={1}/>
          </div>
        </div>
      }

    </>
    )


}

export default Header