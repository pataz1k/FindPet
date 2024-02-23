import React from 'react'
import './Main.css'
import Button from '../../component/ui/Button/Button'
const Main = () => {
  return (
    <>
        <div className="main">
            <p className="about">Найди любимца – молодая российская система объявлений, касающихся пропавших и <br /> найденных питомцев, а также оставшихся без хозяев приемных животных. <br /><br /> Мы благодарны вам за вашу помощь и поддержку по возвращению любимцев туда, где их  <br /> будут любить! <br /><br /> Обязательно посмотрите новые объявления рядом с вами.</p>
            <div className="what-happened">
                <h1>Что случилось?</h1>
                <div className="what-happened_button">
                    <Button to={"/lost-pet"} style={"button-default"}>Я потерял питомца</Button>
                    <Button to={"/find-pet"} style={"button-default"}>Я нашел питомца</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main