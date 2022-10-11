import React from 'react'
import classes from './Input.module.css'

const Input = ({children, ...props}) => {
  return (
    <div className={classes.wrapper}>
        <label className={classes.label}>{props.label}</label>
        <input {...props} className={classes.input} />
    </div>
  )
}

export default Input