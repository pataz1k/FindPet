import React from 'react'
import "./NotFound.css"
import Button from "../../component/ui/Button/Button"
import notFound from '../../assets/404err.svg'

const NotFound = () => {
  return (
    <div className='not-found'>
      <img className='not-found_img' src={notFound} alt="404error" />
      <Button to={"/"} style={"button-small"}>Вернуться на главную</Button>
    </div>
  )
}

export default NotFound