import React from 'react'
import classes from './Span.module.css'

export default function Span({children, ...props}) {
    return (
      <span {...props} className={classes.span}>
          {children}
      </span>
    )
  }  