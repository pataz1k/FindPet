import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PetsList from '../../component/PetsList/PetsList'
import classes from "./Advertisement.module.css"
import apiUrl from '../../context/apiUrl'

const Advertisement = () => {

  const [petsArr,setPetsArr] = useState([]) 

  //! Gets PetsList for advertisement
  useEffect(() => {
    axios.get(apiUrl + 'pets_list')
    .then((response) => {
      console.log(response.data);
      setPetsArr(response.data);
    })
    .catch((err) => {console.log(err)})
  },[])

  return (
    <div className={classes.adv}>
        <PetsList rows={3} petsArr={petsArr}/>
    </div>
  )
}

export default Advertisement