import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { petsURL } from '../../Helper/urlContext'
import PetsList from '../../component/PetsList/PetsList'
import { LoadingContext } from '../../context/LoadingContext'
import classes from "./Advertisement.module.css"

const Advertisement = () => {
  const [petsArr,setPetsArr] = useState([]) 

  const {isLoading,setIsLoading} = useContext(LoadingContext)

  useEffect(() => {
    setIsLoading(true)
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
        <PetsList profile={false} rows={3} petsArr={petsArr}/>
    </div>
  )
}

export default Advertisement