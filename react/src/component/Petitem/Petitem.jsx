import axios from 'axios'
import React from 'react'
import loc_icon from '../../assets/location-icon.svg'
import classes from './Petitem.module.css'
import Button from '../ui/Button/Button'

//? Model fields - ['id','description','address','image','features','number']
//TODO: Add loader + modal www.flowbite-react.com



const Petitem = ({profile,handlerDelete,handlerEdit,id,description,address,image,features,number}) => {
  return (
    <div  id={id} className={classes.item}>
      <img className={classes.image} src={image} alt="Pet image"/>
      <div className={classes.text}>
        <p className={classes.description}>{description}</p>
        <p className={classes.features}>Особенности: {features}</p>
        <p className={classes.address}><img src={loc_icon}/>{address}</p>
        <p className={classes.number}>Номер телефона: <b>{number}</b></p>
        {profile?
              <div className={classes.buttons}>
                <Button style={"button-small button-red"} onClick={() => {handlerDelete(id)}}>Удалить</Button>
                <Button style={"button-small"} onClick={() => {handlerEdit(id)}}>Редактировать</Button>
              </div>
              :
              <></>
        }
      </div>
    </div>
  )
}

export default Petitem