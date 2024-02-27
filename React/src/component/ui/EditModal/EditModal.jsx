import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputMask from "react-input-mask"
import { petsURL } from '../../../Helper/urlContext'
import cross from '../../../assets/cross.svg'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import classes from './EditModal.module.css'

const EditModal = ({setIsVisible,isVisible,itemID,editCallback}) => {
  
      const [address,setAddress] = useState('')
      const [features,setFeatures]= useState("")
      const handleInput = ({ target: { value } }) => setNumber(value);
      const [number,setNumber] = useState("")
      const [description,setDescription] = useState("")

    //* axios.get request to get PickedItem by ID
    useEffect(() => {
      axios.get(`${petsURL}/${itemID}/`)
      .then((response) => {
        setAddress(response.data.address)
        setFeatures(response.data.features)
        setNumber(response.data.number)
        setDescription(response.data.description)
      })
      .catch((err) => {console.log(err)})
    },[])
  
    //* Edit handler send axios.patch request onClick to edit Item
    function handlerEdit() {
      const data = {
        "description": description,
        "address": address,
        "features": features,
        "number": number
      }

      axios.patch(`${petsURL}/${itemID}/`,data)
      .then((response) => {
        console.log(response)
        setIsVisible(false)
        editCallback()
      })
      .catch((err) => {console.log(err)})
    }



  return (
    <>

        <div className={classes.modal_back}>
        <div className={classes.modalWrap}>
            <div className={classes.closeModal}><button onClick={() => {setIsVisible(false)}}><img src={cross} alt="close modal" /></button></div>
            <div className={classes.spacing}></div>
            <Input id={"address"} value={address} onChange={setAddress} label={"Введите адрес:"} placeholder={"г.Москва ул.Бардина"} type={"text"}  />
            <Input id={"features"} value={features} onChange={setFeatures} label={"Введите приметы:"} placeholder={"Серый цвет, ..."} type={"text"}  />
            <div className={classes.masked_input}>
              <p className={classes.p}>Введите номер телефона:</p>
              <InputMask className={classes.input} value={number} onChange={handleInput} mask='+7 999 999 99-99' placeholder='+7 999 999 99-99'  />
            </div>
            <Textarea id={'description'} label='Введите описание' placeholder="Описание" value={description} onChange={setDescription}/>
            <Button style={"button-default center"} onClick={handlerEdit}>Изменить</Button>
        </div>
    </div>

</>
  )
}

export default EditModal