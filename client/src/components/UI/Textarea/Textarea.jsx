import React from 'react'
import classes from './Textarea.module.css'

const Textarea = ({children, ...props}) => {
  return (
    <div className={classes.wrapper}>
        <label className={classes.label}>{props.label}</label>
        <textarea {...props} className={classes.textarea}></textarea>
    </div>
  )
}

export default Textarea