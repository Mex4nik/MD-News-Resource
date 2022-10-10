import React, { useEffect, useState } from 'react'
import ArticleService from '../../../API/ArticlesService';
import CategoryItem from '../CategoryItem/CategoryItem';
import classes from './CategoriesList.module.css'

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await ArticleService.getAllCategories();
        setCategories(response.data)    
    } 

    useEffect(() => {
        fetchCategories();
    }, [])

  return (
    <div className={classes.wrapper}>
        {categories.map(category => 
            <CategoryItem key={category.id} category={category} />    
        )}
    </div>
  )
}

export default CategoriesList