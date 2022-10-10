import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ArticleService from '../API/ArticlesService';
import ArticlesList from '../components/Articles/ArticlesList/ArticlesList';
import Loader from '../components/UI/Loader/Loader';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState('');


  const fetchArticles = async () => {
    let response;
    if (currentCategory) response = await ArticleService.getAllByCategory(currentCategory);
    else response = await ArticleService.getAll();
    setArticles(response.data);
    fetchCategories();
  }

  const fetchCategories = async () => {
    const response = await ArticleService.getAllCategories();
    setCategories(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchArticles();
  }, [])

  return (
    <div>
      {
        isLoading 
        ? <Loader/>
        : <ArticlesList articles={articles} categories={categories} />
      }
    </div>
  )
}

export default Articles;