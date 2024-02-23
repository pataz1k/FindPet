import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../../assets/pfp.svg';
import Button from '../../component/ui/Button/Button';
import { AuthContext } from '../../context/AuthContext';
import { clearUserData, getUserData } from '../../context/dataToCookie';
import classes from './Profile.module.css';
import axios from 'axios';
import PetsList from '../../component/PetsList/PetsList';
import Modal from '../../component/ui/Modal/Modal';
import apiUrl from '../../context/apiUrl';



const Profile = () => {
    
    const [userAdv, setUserAdv] = useState([]) //! User advertisement

    const {isAuth, setIsAuth} = useContext(AuthContext) //! Auth Context
    
    const userData = getUserData() //! Get User Data from cookies

    const [isVisible, setIsVisible] = useState(false) //! Visible state for Modal

    const [itemId, setItemId] = useState(null)

    useEffect(() => {
      if (userData.username && userData.email) {
        setIsAuth(true)
      }
    })

    useEffect(() => {
      //! Axios get request for get PetsList and sorting by userID
      axios.get(apiUrl + 'pets_list')
      .then((response) => {
        response.data.forEach((item) => {
          if (item.user == userData.id) {
            console.log(item)
            setUserAdv(prevItems => [...prevItems,item])
            console.log(userAdv)
          }
        })
      })
      .catch((err) => {console.log(err)})
    },[])
    
    //! Callback function for modal
    //TODO: FIX itemClick is not a function
    const itemClick = useCallback(() => {
      console.log('ITEM CLICKED')
      setIsVisible(true)
    })

    


  return (
    <>
      <div className={classes.profile}>
          {isAuth ?
            <div className={classes.wrap}>
                <img src={user} alt="Profile Picture" className={classes.pfp}/>
                <p>Id аккаунта: {userData.id}</p>
                <p>Имя пользователя: {userData.username}</p>
                <p>Почта: {userData.email}</p>
                <Button onClick={() =>{clearUserData();setIsAuth(false)}} style={"button-small"}>Выйти</Button>
                <PetsList  itemClick={itemClick} rows={2} petsArr={userAdv}/>
            </div>
            :
            <div className={classes.wrapNotAuth}>
              <p>Вы не авторизованы</p>
              <Button to={'/auth'} style={"button-small"}>Войти</Button>
            </div>
          }
      </div>
      <Modal isVisible={isVisible} itemId={itemId} setItemId={setItemId} setIsVisible={setIsVisible}/>
    </>
  )
}

export default Profile