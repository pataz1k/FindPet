import { Pet } from '../../Helper/interfaces'
import Petitem from '../Petitem/Petitem'
import classes from './PetsList.module.css'


const PetsList = ({closeSearch,handlerDelete,handlerEdit,petsArr, rows,profile}:any) => {
  return (
    <>
    {petsArr.length !=0 ?
        <div className={classes.itemslist} style={{gridTemplateColumns:`repeat(${rows}, 1fr)`}}>
        {petsArr.map((item:Pet) => {
          return <Petitem 
          closeSearch={closeSearch}
          profile={profile}
          handlerDelete={handlerDelete}
          handlerEdit={handlerEdit}
          key={item.id} 
          item = {item}/>
        })}
        
      </div>
      :
      <p style={{marginRight: '5px'}}>Сейчас объявлений нет</p>
    }

  </>
  )
}

export default PetsList