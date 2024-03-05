import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { petsURL } from '../../../Helper/urlContext'
import classes from './Search.module.css'
import PetsList from '../../PetsList/PetsList'

const Search = ({setData, setSearchQuery, searchQuery}) => {
  
  const [petsList, setPetsList] = useState([])

  axios.get(petsURL)
  .then((res) => {setPetsList(res.data)})
  .catch((err) => {console.log(err)})

const handleInputChange = (e) => { 
  console.log(`${e.target.value} - ${e.target.value == ''}`)
  setSearchQuery(e.target.value)

  if (e.target.value != '') {
    const filteredItems = petsList.filter((user) =>
  
    user.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    
    setData(filteredItems);
  } else {
    setData([])
  }

}






  return (
    <>
        <input  type="text" value={searchQuery} onChange={handleInputChange} placeholder='Адрес, номер объявления, порода и пр.' className={classes.input}/>
    </>
  )
}

export default Search