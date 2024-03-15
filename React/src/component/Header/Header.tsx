import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../ui/Button/Button';

import menu from '../../assets/menu.svg';
import { AuthContext } from '../../context/AuthContext';
import PetsList from '../PetsList/PetsList';
import Search from '../ui/Search/Search';
import classes from './Header.module.css';

import cross from '../../assets/cross.svg';

const Header = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [isOpen,setIsOpen] = useState(classes.headerWrap)
  const [search, setSearch] = useState('')

  const [searchRes, setSearchRes] = useState<string[]>([])

  function closeSearch() {
    setSearchRes([])
    setSearch('')
  }

  function operDropdown() {

    if (isOpen == classes.headerWrapOpen) {
      setIsOpen(classes.headerWrap)
    } else {
      setIsOpen(classes.headerWrapOpen)
    }
  }
    return (
      <>
      <div className={classes.headerBack}>
      <div className={classes.menuWrap}><button className={classes.menu} onClick={operDropdown}> <img src={menu} alt="" /></button></div>
      <div className={isOpen}>
        <div className={classes.header}>
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link to={'/advertisement'}>Объявления</Link>
          <Search setData={setSearchRes} searchQuery={search} setSearchQuery={setSearch}/>
          <Button to="/create-ad" style={"button-default"}>Создать Объявление</Button>
          {!isAuth ? <Link to={'/auth'}>Войти</Link>: <Link to={'/profile'}>Профиль</Link>}
        </div>
      </div>
      </div>
      {searchRes.length !== 0 &&
        <div className={classes.searchResults}>
          <div className={classes.buttonWrap}><button onClick={closeSearch} className={classes.closeBtn}> <img src={cross} alt="cross"/></button></div>
          <div className={classes.resultWrap}>
            <PetsList closeSearch={closeSearch} petsArr={searchRes} rows={1}/>
          </div>
        </div>
      }

    </>
    )


}

export default Header