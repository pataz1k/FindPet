import { FC } from 'react'
import loc_icon from '../../assets/location-icon.svg'
import classes from './Petitem.module.css'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Pet } from '../../Helper/interfaces'

type Petitem = {
  closeSearch: Function,
  item: Pet,
  profile: boolean,
  handlerDelete: Function,
  handlerEdit: Function,
}

const Petitem:FC<Petitem> = ({closeSearch,item,profile,handlerDelete,handlerEdit}) => {

  const navigate = useNavigate();
  console.log()

  return (
    <div  id={item.id} className={classes.item} onClick={() => { {!profile && navigate(`/advertisement/${item.id}`)} {closeSearch && closeSearch()} }}>
      <img className={classes.image} src={item.image_url} alt="Pet image"/>
      <div className={classes.text}>
        <p className={classes.description}>Описание: {item.description.split(' ').length > 8 ? item.description.split(' ').splice(0,8).join(' ') + '...': item.description}</p>
        <p className={classes.features}>Особенности: {item.features}</p>
        <p className={classes.address}><img className={classes.locIcon} src={loc_icon}/> {item.address}</p>
        <p className={classes.number}>Номер телефона: <b>{item.number}</b></p>
        {profile &&
              <div className={classes.buttons}>
                <Button style={"button-small button-red"} onClick={() => {handlerDelete(item.id)}}>Удалить</Button>
                <Button style={"button-small"} onClick={() => {handlerEdit(item.id)}}>Редактировать</Button>
              </div>
        }
      </div>
    </div>
  )
}

export default Petitem