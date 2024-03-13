import React from 'react'
import classes from './Textarea.module.css'

const Textarea = ({id,label,value,onChange,placeholder}) => {
  return (
    <div className={classes.wrap}>
        <label className={classes.p}>{label}</label>
        <textarea maxLength={255} className={classes.input} id={id} value={value} onChange={(e) => {onChange(e.target.value)}} placeholder={placeholder}></textarea>
    </div>
  )
}

export default Textarea