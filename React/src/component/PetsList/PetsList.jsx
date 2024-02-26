import React from 'react'
import classes from './PetsList.module.css'
import Petitem from '../Petitem/Petitem'


const PetsList = ({handlerDelete,handlerEdit,petsArr, rows,profile}) => {
  return (
    <div className={[classes.itemslist]} style={{gridTemplateColumns:`repeat(${rows}, 1fr)`}}>
    {petsArr.length != 0? petsArr.map((item) => {
      return <Petitem 
      profile={profile}
      handlerDelete={handlerDelete}
      handlerEdit={handlerEdit}
      key={item.id} 
      id={item.id} 
      features={item.features} 
      description={item.description} 
      address={item.address} 
      image={item.image_url}
      number={item.number}/>
    }):
    <p>Сейчас объявлений нет</p>}
  </div>
  )
}

export default PetsList