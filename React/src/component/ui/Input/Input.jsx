import React from 'react'
import classes from './Input.module.css'

const Input = ({id,label,value,onChange,type,placeholder}) => {

  return (
    <div className={classes.wrap}>
        <label className={classes.p}>{label}</label>
        <input maxLength={255} id={id} value={value} placeholder={placeholder} className={classes.input} onChange={(e) => {onChange(e.target.value)}} type={type}/>
    </div>
  )
}

export default Input