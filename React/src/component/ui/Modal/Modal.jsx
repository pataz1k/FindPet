import React from 'react'
import classes from './Modal.module.css'
import Button from '../Button/Button'
import axios from 'axios'
import apiUrl from '../../../context/apiUrl'

const Modal = ({isVisible,setIsVisible,itemId,setItemId}) => {
    if (isVisible) {
        console.log(itemId)
    }
    async function handlerDelete() {
        await axios.delete(`${apiUrl}pets_list/${itemId}/`)
        .then((response) => {
            console.log(response); 
            setIsVisible(false)
        })
        .catch((err) => {console.log(err)})
    }
  return (
        <>
            {isVisible?
                <div className={classes.modal_back}>
                <div className={classes.modalWrap}>
                    <h3>Удалить объявление</h3>
                    <p>Вы уверены что хотите удалить объявление</p>
                    <div className={classes.button_block}>
                        <Button style={"button-default button-red"} onClick={handlerDelete}>Удалить</Button>
                        <Button style={"button-default"} onClick={() => {setIsVisible(false); setItemId(null)}}>Отмена</Button>
                    </div>
                </div>
            </div>
            :
            <div></div>
            }
        </>
  )
}

export default Modal