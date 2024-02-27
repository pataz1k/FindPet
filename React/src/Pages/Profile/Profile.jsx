import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Loader from "react-js-loader";
import user from '../../assets/pfp.svg';
import PetsList from '../../component/PetsList/PetsList';
import Button from '../../component/ui/Button/Button';
import EditModal from '../../component/ui/EditModal/EditModal';
import Modal from '../../component/ui/Modal/Modal';
import { AuthContext } from '../../context/AuthContext';
import { clearUserData, getUserData } from '../../context/dataToCookie';
import { petsURL } from '../../context/urlContext';
import classes from './Profile.module.css';


const Profile = () => {
    const userData = getUserData()

    const [userAdv, setUserAdv] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [isDeleteVisible,setIsDeleteVisible] = useState(false)
    const [isEditVisible,setIsEditVisible] = useState(false)

    const [pickedItem,setPickedItem] = useState(null)


    //* Function to get all data for this user, sorting advertisement by userID
    function getPetsData() {
      setIsLoading(true)
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

    //* Get DATA on load component
    useEffect(() => {
      getPetsData()
    },[])

    //* Handler to delete item, set Modal visible onClick
    function handlerDelete(id) {
      setPickedItem(id)
      setIsDeleteVisible(true)
      
    }
    //* Handler to delete item when accept
    function acceptDelete() {
      axios.delete(`${petsURL}/${pickedItem}/`)
      .then((response) => {console.log(response); setIsDeleteVisible(false); getPetsData()})
      .catch((err) => {console.log(err)})
    }

    //* Handler to edit item, set EditModal visible
    function handlerEdit(id) {
      setIsEditVisible(true)
      setPickedItem(id)
    }

    //* When editing is end, re-paint profile advertisement
    function editCallback() {
      getPetsData()
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
      {isDeleteVisible ?
      <Modal handler={acceptDelete} isVisible={isDeleteVisible} setIsVisible={setIsDeleteVisible}/>
      :
      <></>  
      }
      
      {isEditVisible?
      
      <EditModal itemID={pickedItem} editCallback={editCallback} isVisible={isEditVisible} setIsVisible={setIsEditVisible}/>
      :
      <></>
      }
    </>
  )
}

export default Profile