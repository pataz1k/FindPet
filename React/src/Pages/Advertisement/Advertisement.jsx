import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PetsList from '../../component/PetsList/PetsList'
import classes from "./Advertisement.module.css"
import { petsURL } from '../../Helper/urlContext'
import Loader from "react-js-loader";

const Advertisement = () => {
  const [petsArr,setPetsArr] = useState([]) 

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(petsURL)
    .then((response) => {
      console.log(response)
      setPetsArr(response.data);
      setIsLoading(false)
    })
    .catch((err) => {console.log(err)})
  },[])




  return (
    <div className={classes.adv}>
      {isLoading? 
        <Loader type="box-rectangular" bgColor={'#4565FF'} color={'#000'} title={"Загрузка"} size={100} />
        :
        <PetsList profile={false} rows={3} petsArr={petsArr}/>
      }
        
    </div>
  )
}

export default Advertisement