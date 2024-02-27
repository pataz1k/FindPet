import React from 'react'
import classes from './Modal.module.css'
import Button from '../Button/Button'

const Modal = ({handler,isVisible,setIsVisible}) => {
  return (
        <>
            <div className={classes.modal_back}>
                <div className={classes.modalWrap}>
                    <h3>Удалить объявление</h3>
                    <p>Вы уверены что хотите удалить объявление</p>
                    <div className={classes.button_block}>
                        <Button style={"button-default button-red"} onClick={() => handler()}>Удалить</Button>
                        <Button style={"button-default"} onClick={() => {setIsVisible(false)}}>Отмена</Button>
                    </div>
                </div>
            </div>

        </>
  )
}

export default Modal