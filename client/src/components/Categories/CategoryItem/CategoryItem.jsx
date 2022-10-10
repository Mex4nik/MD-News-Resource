import React from 'react'
import classes from './CategoryItem.module.css'

const CategoryItem = ({category, onclick}) => {
  return (
    <span className={classes.item}>{category.name}</span>
  )
}

export default CategoryItem