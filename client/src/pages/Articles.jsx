import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleService from "../API/ArticlesService";
import ArticlesList from "../components/Articles/ArticlesList/ArticlesList";
import Loader from "../components/UI/Loader/Loader";

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [filteredArticles, setFilteredArticles] = useState([]);
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams] = useSearchParams();

	const fetchArticles = async () => {
		let response = await ArticleService.getAll();

		// if (currentCategory) response = await ArticleService.getAllByCategory(currentCategory);
		// else response = await ArticleService.getAll();

		setArticles(response.data);
		fetchCategories();
    filterArticles(response.data);
	};

	const filterArticles = (articles) => {
    console.log(articles);
		const currentCategoryId = searchParams.get("category");
		if (articles.length && currentCategoryId) {
			const articlesByCategory = articles.filter(
				(article) => article.category.id === +currentCategoryId
			);
			setFilteredArticles(articlesByCategory);
		} else {
			setFilteredArticles(articles);
		}
	};

	const fetchCategories = async () => {
		const response = await ArticleService.getAllCategories();
		setCategories(response.data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	useEffect(() => {
    if (articles.length) filterArticles(articles);
	}, [searchParams]);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<ArticlesList articles={filteredArticles} categories={categories} />
			)}
		</div>
	);
};

export default Articles;
