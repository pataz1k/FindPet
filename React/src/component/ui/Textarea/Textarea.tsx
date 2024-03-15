import { Dispatch, FC, SetStateAction } from 'react'
import classes from './Textarea.module.css'
type Textarea = {
  id: string,
  label: string,
  value: string,
  onChange: Dispatch<SetStateAction<string>>,
  placeholder: string,
}

const Textarea:FC <Textarea> = ({id,label,value,onChange,placeholder}) => {
  return (
    <div className={classes.wrap}>
        <label className={classes.p}>{label}</label>
        <textarea maxLength={255} className={classes.input} id={id} value={value} onChange={(e) => {onChange(e.target.value)}} placeholder={placeholder}></textarea>
    </div>
  )
}

export default Textarea