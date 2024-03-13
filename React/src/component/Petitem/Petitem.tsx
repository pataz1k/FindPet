import axios from 'axios'
import React from 'react'
import loc_icon from '../../assets/location-icon.svg'
import classes from './Petitem.module.css'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router-dom'

const Petitem = ({closeSearch,profile,handlerDelete,handlerEdit,id,description,address,image,features,number}) => {

  const navigate = useNavigate();
  console.log()

  return (
    <div  id={id} className={classes.item} onClick={() => { {!profile && navigate(`/advertisement/${id}`)} {closeSearch && closeSearch()} }}>
      <img className={classes.image} src={image} alt="Pet image"/>
      <div className={classes.text}>
        <p className={classes.description}>Описание: {description.split(' ').length > 8 ? description.split(' ').splice(0,8).join(' ') + '...': description}</p>
        <p className={classes.features}>Особенности: {features}</p>
        <p className={classes.address}><img className={classes.locIcon} src={loc_icon}/> {address}</p>
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