import React from 'react'
import { useSearchParams } from 'react-router-dom';
import classes from './CategoryItem.module.css'

const CategoryItem = ({category, onclick}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setCategoryToUrl = (categoryId) => {
    setSearchParams({category: categoryId});
  }

  return (
    <span className={classes.item} onClick={() => setCategoryToUrl(category.id)}>{category.name}</span>
  )
}

export default CategoryItem