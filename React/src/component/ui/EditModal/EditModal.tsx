import React, { useEffect, useState, useRef } from 'react'
import InputMask from "react-input-mask"
import { getPetById, patchPet } from '../../../Helper/serverRequest'
import cross from '../../../assets/cross.svg'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import classes from './EditModal.module.css'
import {toast } from 'react-toastify';

const EditModal = ({setIsVisible,isVisible,itemID,editCallback}) => {

    const toastId = useRef(null);
  
      const [address,setAddress] = useState('')
      const [features,setFeatures]= useState("")
      const handleInput = ({ target: { value } }) => setNumber(value);
      const [number,setNumber] = useState("")
      const [description,setDescription] = useState("")

    //* axios.get request to get PickedItem by ID
    useEffect(() => {
      getPetById(itemID)
      .then((response) => {
        setAddress(response.address)
        setFeatures(response.features)
        setNumber(response.number)
        setDescription(response.description)
      })
      .catch((err) => {console.log(err)})
    },[])
  
    //* Edit handler send axios.patch request onClick to edit Item
    function handlerEdit() {
      toastId.current = toast.loading("Редактирование объявления...", { autoClose: false });
      const data = {
        "description": description,
        "address": address,
        "features": features,
        "number": number
      }

      setTimeout(() => {
        patchPet(itemID,data)
        .then((response) => {
          console.log(response)
          setIsVisible(false)
          editCallback()
          toast.update(toastId.current, { render:'Изменено' , type: "success" ,autoClose: 2000, isLoading: false,  });
        })
        .catch((err) => {toast.update(toastId.current, { render:'Ошибка редактирования' , type: "error" ,autoClose: 2000, isLoading: false,  });})
      }, 1500);
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