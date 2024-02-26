import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../../assets/pfp.svg';
import Button from '../../component/ui/Button/Button';
import { AuthContext } from '../../context/AuthContext';
import { clearUserData, getUserData } from '../../context/dataToCookie';
import classes from './Profile.module.css';
import axios from 'axios';
import PetsList from '../../component/PetsList/PetsList';
import Modal from '../../component/ui/Modal/Modal';
import { petsURL } from '../../context/urlContext';
import Loader from "react-js-loader";
import EditModal from '../../component/ui/EditModal/EditModal';


const Profile = () => {
    const [userAdv, setUserAdv] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const userData = getUserData()
    const [isDeleteVisible,setIsDeleteVisible] = useState(false)

    const [isEditVisible,setIsEditVisible] = useState(false)

    const [pickedItem,setPickedItem] = useState(null)
    const [editItem, setEditItem] = useState(null)

    function getPetsData() {
      setUserAdv('')
      if (userData !== null) {
        setIsAuth(true)

        axios.get(petsURL)
        .then((response) => {
          setIsLoading(false)
          response.data.forEach((item) => {
            if (item.user == userData.id) {
              console.log(item)
              setUserAdv(prevItems => [...prevItems,item])
              console.log(userAdv)

            }
          })
        })
        .catch((err) => {console.log(err)})
      }
    }


    useEffect(() => {
      getPetsData()
    },[])

    
    function handlerDelete(id) {
      console.log('ITEM CLICKED')
      setPickedItem(id)
      setIsDeleteVisible(true)
      
    }

    function acceptDelete() {
      axios.delete(`${petsURL}/${pickedItem}/`)
      .then((response) => {console.log(response); setIsDeleteVisible(false); getPetsData()})
      .catch((err) => {console.log(err)})
    }

    
    function handlerEdit(id) {
      setIsEditVisible(true)
      setPickedItem(id)
      console.log(`ID - ${id}`)

    }
    

  return (
    <>

      <div className={classes.profile}>
          {isAuth ?

                  <div className={classes.wrap}>
                    
                      <img src={user} alt="Profile Picture" className={classes.pfp}/>
                      <p>Id аккаунта: {userData.id}</p>
                      <p>Имя пользователя: {userData.username}</p>
                      <p>Почта: {userData.email}</p>
                      <Button onClick={() =>{clearUserData(); setIsAuth(false)}} style={"button-small"}>Выйти</Button>
                      {isLoading ? 
                      <Loader type="box-rectangular" bgColor={'#4565FF'} color={'#000'} title={"Загрузка"} size={100} />
                      :
                      <PetsList profile={true} handlerEdit={handlerEdit} handlerDelete={handlerDelete} rows={2} petsArr={userAdv}/>
                      }
                  </div>
                  :
                  <div className={classes.wrapNotAuth}>
                    <p>Вы не авторизованы</p>
                    <Button to={'/auth'} style={"button-small"}>Войти</Button>
                  </div>
      
          }
      </div>
      <Modal handler={acceptDelete} isVisible={isDeleteVisible} setIsVisible={setIsDeleteVisible}/>
      {isEditVisible?
      
      <EditModal itemID={pickedItem} isVisible={isEditVisible} setIsVisible={setIsEditVisible}/>
      :
      <></>
      }
    </>
  )
}

export default Profile