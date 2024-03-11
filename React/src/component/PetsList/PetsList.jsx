import React from 'react'
import classes from './PetsList.module.css'
import Petitem from '../Petitem/Petitem'


const PetsList = ({closeSearch,handlerDelete,handlerEdit,petsArr, rows,profile}) => {
  return (
    <>
    {petsArr.length !=0 ?
        <div className={[classes.itemslist]} style={{gridTemplateColumns:`repeat(${rows}, 1fr)`}}>
        {petsArr.map((item) => {
          return <Petitem 
          closeSearch={closeSearch}
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
        })}
        
      </div>
      :
      <p style={{marginRight: '5px'}}>Сейчас объявлений нет</p>
    }

  </>
  )
}

export default PetsList