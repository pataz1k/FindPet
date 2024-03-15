import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { clearUserId, getUserId } from '../../Helper/dataToCookie';
import { Pet, User } from '../../Helper/interfaces';
import { deletePet, getPetsList, getUserById, patchUser } from '../../Helper/serverRequest';
import accept from '../../assets/accept.svg';
import edit from '../../assets/edit.svg';
import user from '../../assets/pfp.svg';
import PetsList from '../../component/PetsList/PetsList';
import Button from '../../component/ui/Button/Button';
import EditModal from '../../component/ui/EditModal/EditModal';
import Input from '../../component/ui/Input/Input';
import Modal from '../../component/ui/Modal/Modal';
import { AuthContext } from '../../context/AuthContext';
import { LoadingContext } from '../../context/LoadingContext';
import classes from './Profile.module.css';


//! Delayed API for Loader TEST
//! https://reqres.in/api/users?delay=3


const Profile = () => {
  const defaultUser = {
    "id": '',
    "first_name": "",
    "username": "",
    "password": "",
    "email": ""
}
  const toastId = useRef<number | string >('');

  const userId = getUserId()

  const [userData, setUserData] = useState<User>(defaultUser)

  const [displayName, setDisplayName] = useState<string>('')
  const [isDisplayNameChange, setIsDisplayNameChange] = useState<boolean>(false)

  const [userAdv, setUserAdv] = useState<Array<Pet>>([])

  const { setIsLoading } = useContext(LoadingContext)
  
  const { isAuth, setIsAuth } = useContext(AuthContext)
  
  const [isDeleteVisible, setIsDeleteVisible] = useState<boolean>(false)
  const [isEditVisible, setIsEditVisible] = useState<boolean>(false)

  const [pickedItem, setPickedItem] = useState<string | null>(null)

  //* Get DATA on load component
  useEffect(() => {
    setIsLoading(true)

      if (isAuth) {
        console.log('fetch user')
        getUserById(userId)
        .then((res) => {setUserData(res);})
        .catch((err) => {console.log(err)})
        .finally(() => {getPetsData()})
      }

  }, [])
  

  async function fetchData() {
    setIsLoading(true)
    setTimeout(() => {
      if (isAuth) {
        console.log('fetch user')
        getUserById(userId)
        .then((res:User) => {setUserData(res);
        })
        .catch((err) => {console.log(err)})
        .finally(() => {getPetsData()})
      }

    },1500)
  }

  //* Function to get all data for this user, sorting advertisement by userID
  function getPetsData() {
    console.log('fetch pets')
    setUserAdv([])
  
    getPetsList()
      .then((response) => {
        response.forEach((item:Pet) => {
          if (item.user == userId) {
            setUserAdv(prevItems => [...prevItems, item])
          }
        })
      })
      .catch((err) => { console.log(err) })
      .finally(() => {setIsLoading(false)})
  }

  //* Handler to delete item, set Modal visible onClick
  function handlerDelete(id:string) {
    setPickedItem(id)
    setIsDeleteVisible(true)

  }
  //* Handler to delete item when accept
  function acceptDelete() {
    toastId.current = toast.loading("Удаление объявления...", { autoClose: false });
    setTimeout(() => {
      deletePet(pickedItem)
      .then((response) => {
          toast.update(toastId.current, { render:'Удалено' , type: "success" ,autoClose: 2000, isLoading: false,  });
      })
      .catch((err) => {
          toast.update(toastId.current, { render:'Ошибка удаления' , type: "error" ,autoClose: 2000, isLoading: false,  });
      })
      .finally(() => {
        setIsDeleteVisible(false)
        getPetsData()
        
      })
    },1500)
  }

  //* Handler to edit item, set EditModal visible
  function handlerEdit(id:string) {
    setIsEditVisible(true)
    setPickedItem(id)
  }
  
  function handlerPatch() {

    setTimeout(() => {
      patchUser(userData.id,{"first_name": displayName})
      .then((response) => {console.log(response)})
      .catch((err) => {console.log(err)})
      .finally(() => {
        setIsDisplayNameChange(false)
        fetchData()
      })
    },1500)
  }




  return (
    <>
      {isDeleteVisible ?
        <Modal handler={acceptDelete} setIsVisible={setIsDeleteVisible} />
        :
        <></>
      }

      {isEditVisible ?

      <EditModal itemID={pickedItem} editCallback={getPetsData} setIsVisible={setIsEditVisible} />
      :
      <></>
      }
      <div className={classes.profile}>

        {isAuth ?

          <div className={classes.wrap}>

            <img src={user} alt="Profile Picture" className={classes.pfp} />
            <p>Id аккаунта: {userData.id}</p>
            {isDisplayNameChange ?

            <div style={{display: 'flex', gap: '20px', alignItems:"flex-end"}}>
              <Input id={"displayName"} value={displayName} onChange={setDisplayName} label={"Введите отображаемое имя:"} placeholder={"Имя"} type={"text"}  />
              <button className={classes.btn} onClick={handlerPatch}><img src={accept} alt="" /></button>
            </div> 
            :
            <div style={{display: 'flex', gap: '20px'}}>
              <p>Отображаемое имя: {userData.first_name}</p>
              <button className={classes.btn} onClick={() => {setIsDisplayNameChange(true);setDisplayName(userData.first_name)}}><img src={edit} alt="edit svg" /></button>
            </div> 
            }
          
            <p>Логин: {userData.username}</p>
            <p>Почта: {userData.email}</p>
            <Button onClick={() => { clearUserId(); setIsAuth(false) }} style={"button-small"}>Выйти</Button>
            <PetsList profile={true} handlerEdit={handlerEdit} handlerDelete={handlerDelete} rows={2} petsArr={userAdv} />
          </div>
          :
          <div className={classes.wrapNotAuth}>
            <p>Вы не авторизованы</p>
            <Button to={'/auth'} style={"button-small"}>Войти</Button>
          </div>

        }
      </div>



    </>
  )
}

export default Profile