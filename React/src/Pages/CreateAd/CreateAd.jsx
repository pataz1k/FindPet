import React, { useContext, useState } from 'react';
import InputMask from "react-input-mask";
import Input from '../../component/ui/Input/Input';
import classes from './CreateAd.module.css';
import Textarea from '../../component/ui/Textarea/Textarea';
import Button from '../../component/ui/Button/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../Helper/dataToCookie';
import { petsURL } from '../../Helper/urlContext';
import { LoadingContext } from '../../context/LoadingContext';

const LostPet = () => {

  const {isLoading, setIsLoading} = useContext(LoadingContext)
  setIsLoading(false)

  const navigate = useNavigate()
  const [address,setAddress] = useState("")
  const [features,setFeatures]= useState("")

  const handleInput = ({ target: { value } }) => setNumber(value);
  const [number,setNumber] = useState("")

  const [description,setDescription] = useState("")

  const [file,setFile] = useState(null)

  const userCookie = getUserData()
  
  async function handleSend() {
    const data ={
      "user": userCookie.id,
      "image_url": file,
      "description": description,
      "address": address,
      "features": features,
      "number": number
  }
  console.log(data)
  await axios.post(petsURL,data, {
    headers: {
      "Content-Type": "multipart/form-data",
  },
  })
  .then((response) => {console.log(response)})
  .catch((err) => {console.log(err)})

  navigate('/advertisement')
  }

  return (
    <div className={classes.lostPet}>
      <div className={classes.wrap}>
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
      </div>
    </div>
  )
}

export default LostPet