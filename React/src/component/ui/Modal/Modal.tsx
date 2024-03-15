import { Dispatch, FC, SetStateAction } from 'react'
import Button from '../Button/Button'
import classes from './Modal.module.css'

type Modal = {
    handler: Function,
    setIsVisible: Dispatch<SetStateAction<boolean>>
}

const Modal:FC<Modal> = ({handler,setIsVisible}) => {
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