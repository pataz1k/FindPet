import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { petsURL } from '../../../Helper/urlContext'
import classes from './Search.module.css'
import PetsList from '../../PetsList/PetsList'

const Search = ({setData,APIData}) => {

/* {
    "id": 9,
    "user": 2,
    "image_url": null,
    "description": "test",
    "address": "test",
    "features": "test",
    "number": "test"
} */

const [searchItem, setSearchItem] = useState('')
const [filteredUsers, setFilteredUsers] = useState(APIData)
console.log(filteredUsers)

const handleInputChange = (e) => { 
  const searchTerm = e.target.value;
  setSearchItem(searchTerm)

  const filteredItems = APIData.filter((user) =>
  user.description.toLowerCase().includes(searchItem.toLowerCase())
  );

  setFilteredUsers(filteredItems);
}





  return (
    <>
        <input  type="text" value={searchItem} onChange={handleInputChange} placeholder='Адрес, номер объявления, порода и пр.' className={classes.input}/>
    </>
  )
}

export default Search