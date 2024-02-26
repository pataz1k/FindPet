import React from 'react'
import classes from './EditModal.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import InputMask from "react-input-mask";
import Textarea from '../Textarea/Textarea';
import { useState } from 'react'

const EditModal = ({setIsVisible,isVisible,itemID}) => {


    // axios.get(`${petsURL}/${itemID}/`)
    // .then((response) => {setEditItem(response.data[0]); setIsEditVisible(true)})
    // .catch((err) => {console.log(err)})

    console.log(itemID)
    const [address,setAddress] = useState('')
    const [features,setFeatures]= useState("")
  
    const handleInput = ({ target: { value } }) => setNumber(value);
    const [number,setNumber] = useState("")
  
    const [description,setDescription] = useState("")
  
    const [file,setFile] = useState(null)



  return (
    <>

        <div className={classes.modal_back}>
        <div className={classes.modalWrap}>
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
            <Button style={"button-default center"}>Изменить</Button>
        </div>
    </div>

</>
  )
}

export default EditModal