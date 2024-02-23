import axios from 'axios';
import React, { useState } from 'react';
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom';
import Button from '../../component/ui/Button/Button';
import Input from '../../component/ui/Input/Input';
import Textarea from '../../component/ui/Textarea/Textarea';
import apiUrl from '../../context/apiUrl';
import { getUserData } from '../../context/dataToCookie';
import classes from './CreateAd.module.css';

const LostPet = () => {

  const navigate = useNavigate() //! For navigate to advertisement
  const userCookie = getUserData() //! For get user data from cookies

  //! State for inputs
  const [address,setAddress] = useState("")
  const [features,setFeatures]= useState("")
  const handleInput = ({ target: { value } }) => setNumber(value);
  const [number,setNumber] = useState("")
  const [description,setDescription] = useState("")
  const [file,setFile] = useState(null)

  
  async function handleSend() {

    //! Collectiong data for post data
    const data ={
      "user": userCookie.id,
      "image_url": file,
      "description": description,
      "address": address,
      "features": features,
      "number": number
    }


  //! Axios post request for creating new advertisement
  await axios.post(apiUrl + 'pets_list',data, {
    headers: {
      "Content-Type": "multipart/form-data",
  },
  })
  .then((response) => {console.log(response)})
  .catch((err) => {console.log(err)})

  //! After posting navigate to advertisement page
  navigate('/advertisement')
  }

  return (
    <div className={classes.lostPet}>
      <div className={classes.wrap} >
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
        <Button type={"submit"} style={"button-default center"} onClick={handleSend} >Отправить</Button>
      </div>
    </div>
  )
}

export default LostPet