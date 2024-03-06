import React, { useContext, useEffect, useState } from 'react'
import { getPetsList } from '../../Helper/serverRequest'
import PetsList from '../../component/PetsList/PetsList'
import { LoadingContext } from '../../context/LoadingContext'
import classes from "./Advertisement.module.css"

const Advertisement = () => {
  const [petsArr,setPetsArr] = useState([]) 

  const {isLoading,setIsLoading} = useContext(LoadingContext)

  useEffect(() => {
    setIsLoading(true)
    getPetsList()
    .then((response) => {
      console.log("GET PETS DATA FOR ADVERTISEMENT")
      setPetsArr(response);
    })
    .catch((err) => {console.log(err)})
    .finally(() => {setIsLoading(false)})
  },[])




  return (
    <div className={classes.adv}>
        <PetsList profile={false} rows={3} petsArr={petsArr}/>
    </div>
  )
}

export default Advertisement