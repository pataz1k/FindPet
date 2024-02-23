import axios from 'axios'
import React from 'react'
import loc_icon from '../../assets/location-icon.svg'
import classes from './Petitem.module.css'

//? Model fields - ['id','description','address','image','features','number']
//TODO: Add loader + modal www.flowbite-react.com



const Petitem = ({itemClick,id,description,address,image,features,number}) => {

  function handleClick() {
    console.log('click')
    itemClick(id)
  }
  return (
    <div onClick={() => {handleClick()}} id={id} className={classes.item}>
      <img className={classes.image} src={image} alt="Pet image"/>
      <div className={classes.text}>
        <p className={classes.description}>{description}</p>
        <p className={classes.features}>Особенности: {features}</p>
        <p className={classes.address}><img src={loc_icon}/>{address}</p>
        <p className={classes.number}>Номер телефона: <b>{number}</b></p>
      </div>
    </div>
  )
}

export default Petitem