import React, { useContext, useState, useRef } from 'react';
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../Helper/dataToCookie';
import { postPet } from '../../Helper/serverRequest';
import Button from '../../component/ui/Button/Button';
import Input from '../../component/ui/Input/Input';
import Textarea from '../../component/ui/Textarea/Textarea';
import { LoadingContext } from '../../context/LoadingContext';
import classes from './CreateAd.module.css';
import {toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const LostPet = () => {
  const toastId = useRef(null);

  const {isLoading, setIsLoading} = useContext(LoadingContext)
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const navigate = useNavigate()

  //* States for all inputs
  const [address,setAddress] = useState("")
  const [features,setFeatures]= useState("")
  const [number,setNumber] = useState("")
  const [description,setDescription] = useState("")
  const [file,setFile] = useState(null)
  const handleInput = ({ target: { value } }) => setNumber(value);

  const userId = getUserId()

  async function handleSend() {

    
    const data ={
      "user": userId,
      "image_url": file,
      "description": description,
      "address": address,
      "features": features,
      "number": number
    }
    
    if (!file || !description || !address || !features || !number) {
      toast.error('Поля должны быть заполнены')
    } else {
      toastId.current = toast.loading("Отправка объявления...", { autoClose: false });
      setTimeout(() => {
        postPet(data)
        .then((response) => {
            toast.update(toastId.current, { render:'Отправленно' , type: "success" ,autoClose: 2000, isLoading: false,  });
            navigate('/advertisement')
        })
        .catch((err) => {toast.update(toastId.current, { render:'Ошибка отправления' , type: "error" ,autoClose: 2000, isLoading: false,  });})
          
      }, 1500);
    }


  }

  return (
    <div className={classes.lostPet}>
      <div className={classes.wrap}>
        {isAuth ?
                <>
                <Input id={"address"} value={address} onChange={setAddress} label={"Введите адрес:"} placeholder={"г.Москва ул.Бардина"} type={"text"}  />
                <Input id={"features"} value={features} onChange={setFeatures} label={"Введите приметы:"} placeholder={"Серый цвет, ..."} type={"text"}  />
                <div className={classes.masked_input}>
                  <p className={classes.p}>Введите номер телефона:</p>
                  <InputMask className={classes.input} value={number} onChange={handleInput} mask='+7 999 999 99-99' placeholder='+7 999 999 99-99'  />
                </div>
                <Textarea id={'description'} label='Введите описание' placeholder="Описание" value={description} onChange={setDescription}/>
                <div className={classes.masked_input}>
                  <p className={classes.p}>Добавьте фотографию:</p>
                  <input  type="file" onChange={(e) => {setFile(e.target.files[0])}}/>
                </div>
                <Button style={"button-default center"} onClick={handleSend} >Отправить</Button>
                </>
                :
                <>
                  <h2>Для того чтобы оставить объявление нужно войти в аккаунт</h2>
                  <Button style={"button-default center"} to={'/auth'}  onClick={handleSend}>Войти</Button>
                </>
      }
      </div>
    </div>
  )
}

export default LostPet