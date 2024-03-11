import React, { useEffect, useState } from 'react'
import { getPetsList } from '../../../Helper/serverRequest'
import classes from './Search.module.css'

const Search = ({setData, setSearchQuery, searchQuery}) => {
  
  const [petsList, setPetsList] = useState([])

  useEffect(() => {
    getPetsList()
    .then((res) => {setPetsList(res)})
    .catch((err) => {console.log(err)})
  },[])

  const handleInputChange = (e) => { 
    setSearchQuery(e.target.value)
  
    if (e.target.value != '') {
      const filteredItems = petsList.filter((user) =>
    
      user.description.toLowerCase().includes(e.target.value.toLowerCase()) || 
      user.features.toLowerCase().includes(e.target.value.toLowerCase()) || 
      user.address.toLowerCase().includes(e.target.value.toLowerCase()) ||
      user.number.toLowerCase().split(/[' ' -]/).join('').includes(e.target.value.toLowerCase())
    
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