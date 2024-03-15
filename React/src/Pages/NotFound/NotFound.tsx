import notFound from '../../assets/404err.svg'
import Button from "../../component/ui/Button/Button"
import "./NotFound.css"

const NotFound = () => {


  return (
    <div className='not-found'>
      <img className='not-found_img' src={notFound} alt="404error" />
      <Button to={"/"} style={"button-small"}>Вернуться на главную</Button>
    </div>
  )
}

export default NotFound