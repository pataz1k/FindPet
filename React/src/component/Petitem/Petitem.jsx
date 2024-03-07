import axios from 'axios'
import React from 'react'
import loc_icon from '../../assets/location-icon.svg'
import classes from './Petitem.module.css'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router-dom'

const Petitem = ({profile,handlerDelete,handlerEdit,id,description,address,image,features,number}) => {

  const navigate = useNavigate();


  return (
    <div  id={id} className={classes.item} onClick={() => { !profile && navigate(`/advertisement/${id}`) }}>
      <img className={classes.image} src={image} alt="Pet image"/>
      <div className={classes.text}>
        <p className={classes.description}>{description.split(' ').splice(0,8).join(' ') + '...'}</p>
        <p className={classes.features}>Особенности: {features}</p>
        <p className={classes.address}><img src={loc_icon}/>{address}</p>
        <p className={classes.number}>Номер телефона: <b>{number}</b></p>
        {profile &&
              <div className={classes.buttons}>
                <Button style={"button-small button-red"} onClick={() => {handlerDelete(id)}}>Удалить</Button>
                <Button style={"button-small"} onClick={() => {handlerEdit(id)}}>Редактировать</Button>
              </div>
        }
      </div>
    </div>
  )
}

export default Petitem