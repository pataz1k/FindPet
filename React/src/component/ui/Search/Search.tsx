import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Pet } from '../../../Helper/interfaces'
import { getPetsList } from '../../../Helper/serverRequest'
import classes from './Search.module.css'

type Search = {
  setData: Dispatch<SetStateAction<string[]>>,
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>
}

const Search:FC <Search> = ({setData, setSearchQuery, searchQuery}) => {
  
  const [petsList, setPetsList] = useState([])

  useEffect(() => {
    getPetsList()
    .then((res) => {setPetsList(res)})
    .catch((err) => {console.log(err)})
  },[])

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => { 
    setSearchQuery(e.target.value)
  
    if (e.target.value != '') {
      const filteredItems = petsList.filter((pet:Pet) =>
    
      pet.description.toLowerCase().includes(e.target.value.toLowerCase()) || 
      pet.features.toLowerCase().includes(e.target.value.toLowerCase()) || 
      pet.address.toLowerCase().includes(e.target.value.toLowerCase()) ||
      pet.number.toLowerCase().split(/[' ' -]/).join('').includes(e.target.value.toLowerCase())
    
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